#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const suppliedDir = args.find(arg => !arg.startsWith('--'))

const defaultDirs = ['app/routes', 'routes']
const targetDir = suppliedDir
  ? path.resolve(process.cwd(), suppliedDir)
  : defaultDirs
      .map(dir => path.resolve(process.cwd(), dir))
      .find(dir => fs.existsSync(dir))

if (!targetDir) {
  console.error('Could not find a routes folder. Pass one explicitly, for example:')
  console.error('node scripts/fix-path-to-regexp-wildcards.js app/routes')
  process.exit(1)
}

if (!fs.existsSync(targetDir)) {
  console.error(`Routes folder does not exist: ${targetDir}`)
  process.exit(1)
}

const routeMethods = [
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'del',
  'all',
  'use'
]

const routeCallPattern = `\\b(?:router|app)\\.(${routeMethods.join('|')})\\s*\\(\\s*`

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (
        entry.name === 'node_modules' ||
        entry.name === '.git' ||
        entry.name === 'coverage' ||
        entry.name === 'dist' ||
        entry.name === 'build'
      ) {
        continue
      }

      files.push(...walk(fullPath))
      continue
    }

    if (entry.isFile() && /\.(js|cjs|mjs)$/.test(entry.name)) {
      files.push(fullPath)
    }
  }

  return files
}

function escapeForRegexLiteral(value) {
  return value
    .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
    .replace(/\//g, '\\/')
}

function routePathToRegexLiteral(routePath) {
  if (routePath === '*' || routePath === '/*') {
    return '/.*/'
  }

  if (routePath.endsWith('/*')) {
    const prefix = routePath.slice(0, -1)
    return `/^${escapeForRegexLiteral(prefix)}.*$/`
  }

  return null
}

function fixLine(line, filePath, lineNumber, changes, warnings) {
  const trimmed = line.trim()

  // Do not edit commented-out routes
  if (trimmed.startsWith('//')) {
    return line
  }

  let fixed = line

  const straightQuotePattern = new RegExp(
    `(${routeCallPattern})(['"\`])([^'"\`]*\\*)\\2`,
    'g'
  )

  fixed = fixed.replace(straightQuotePattern, (match, prefix, method, quote, routePath) => {
    const replacement = routePathToRegexLiteral(routePath)

    if (!replacement) {
      warnings.push({
        filePath,
        lineNumber,
        routePath,
        reason: 'Wildcard route was found, but it was not a simple bare or trailing wildcard.'
      })
      return match
    }

    changes.push({
      filePath,
      lineNumber,
      from: routePath,
      to: replacement
    })

    return `${prefix}${replacement}`
  })

  const smartSingleQuotePattern = new RegExp(
    `(${routeCallPattern})'([^']*\\*)'`,
    'g'
  )

  fixed = fixed.replace(smartSingleQuotePattern, (match, prefix, method, routePath) => {
    const replacement = routePathToRegexLiteral(routePath)

    if (!replacement) {
      warnings.push({
        filePath,
        lineNumber,
        routePath,
        reason: 'Wildcard route was found, but it was not a simple bare or trailing wildcard.'
      })
      return match
    }

    changes.push({
      filePath,
      lineNumber,
      from: routePath,
      to: replacement
    })

    return `${prefix}${replacement}`
  })

  const smartDoubleQuotePattern = new RegExp(
    `(${routeCallPattern})"([^"]*\\*)"`,
    'g'
  )

  fixed = fixed.replace(smartDoubleQuotePattern, (match, prefix, method, routePath) => {
    const replacement = routePathToRegexLiteral(routePath)

    if (!replacement) {
      warnings.push({
        filePath,
        lineNumber,
        routePath,
        reason: 'Wildcard route was found, but it was not a simple bare or trailing wildcard.'
      })
      return match
    }

    changes.push({
      filePath,
      lineNumber,
      from: routePath,
      to: replacement
    })

    return `${prefix}${replacement}`
  })

  return fixed
}

const files = walk(targetDir)
const changedFiles = []
const allChanges = []
const allWarnings = []

for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf8')
  const lines = original.split('\n')

  const fileChanges = []
  const fileWarnings = []

  const fixed = lines
    .map((line, index) => fixLine(line, filePath, index + 1, fileChanges, fileWarnings))
    .join('\n')

  allChanges.push(...fileChanges)
  allWarnings.push(...fileWarnings)

  if (fixed !== original) {
    changedFiles.push(filePath)

    if (!dryRun) {
      const backupPath = `${filePath}.bak`

      if (!fs.existsSync(backupPath)) {
        fs.writeFileSync(backupPath, original)
      }

      fs.writeFileSync(filePath, fixed)
    }
  }
}

if (allChanges.length === 0) {
  console.log('No simple wildcard route paths were found that needed changing.')
} else {
  console.log(dryRun ? 'Dry run only. No files were changed.\n' : 'Updated wildcard route paths.\n')

  for (const change of allChanges) {
    const relativePath = path.relative(process.cwd(), change.filePath)
    console.log(`${relativePath}:${change.lineNumber}`)
    console.log(`  ${change.from}  ->  ${change.to}`)
  }

  console.log(`\nFiles ${dryRun ? 'that would be changed' : 'changed'}: ${changedFiles.length}`)
}

if (allWarnings.length > 0) {
  console.log('\nWarnings, these need manual checking:')

  for (const warning of allWarnings) {
    const relativePath = path.relative(process.cwd(), warning.filePath)
    console.log(`${relativePath}:${warning.lineNumber}`)
    console.log(`  ${warning.routePath}`)
    console.log(`  ${warning.reason}`)
  }
}