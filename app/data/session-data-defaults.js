/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

var moment = require('moment')

// Dates etc
const nextWeek = moment().add(7, 'days').format('ddd D MMM')
const in2weeks = moment().add(14, 'days').format('dddd D MMMM')
const in2weeksAbbr = moment().add(14, 'days').format('ddd D MMM')
const in4weeks = moment().add(28, 'days').format('dddd D MMMM')
const in4weeksAbbr = moment().add(28, 'days').format('ddd D MMM')
const lastWeek = moment().subtract(7, 'days').format('D MMMM YYYY')
const lastWeekAbbr = moment().subtract(7, 'days').format('ddd D MMM')
const threeWeeks = moment().subtract(21, 'days').format('ddd D MMM')
const threeYearsAgo = moment().subtract(3, 'years').format('D MMMM YYYY')
const thirtyOneMonthsAgo = moment().subtract(31, 'months').format('D MMMM YYYY')
const yesterday = moment().subtract(1, 'days').format('dddd D MMMM YYYY')
const yesterdayAbbr = moment().subtract(1, 'days').format('ddd D MMM')
const twoWeeksAgo = moment().subtract(14, 'days').format('dddd D MMM YYYY')
const twoWeeksAgoAbbr = moment().subtract(14, 'days').format('ddd D MMM')
const fourWeeksAgo = moment().subtract(28, 'days').format('ddd D MMM')
const sixWeeksAgo = moment().subtract(42, 'days').format('ddd D MMM')
const eightWeeksAgo = moment().subtract(56, 'days').format('ddd D MMM')
const tenWeeksAgo = moment().subtract(70, 'days').format('ddd D MMM')
const twelveWeeksAgo = moment().subtract(84, 'days').format('ddd D MMM')
const fourteenWeeksAgo = moment().subtract(98, 'days').format('ddd D MMM')
const sixteenWeeksAgo = moment().subtract(112, 'days').format('ddd D MMM')
const twentyWeeksAgo = moment().subtract(140, 'days').format('ddd D MMM')
const twentyFourWeeksAgo = moment().subtract(168, 'days').format('ddd D MMM')
const twentyEightWeeksAgo = moment().subtract(196, 'days').format('ddd D MMM')
const thirtyTwoWeeksAgo = moment().subtract(224, 'days').format('ddd D MMM')
const eighteenMonthsAgo = moment().subtract(549, 'days').format('D MMMM YYYY')
const fourteenWeeksAgoHMRC = moment().subtract(98, 'days').format('D MMM YYYY')

// Service names
const dthServiceName = 'DWP login and identification service'
const dssServiceName = 'Check your benefit payments'
const carersServiceName = 'Apply for Carer\'s Allowance'
const pensionCreditServiceName = 'Apply for Pension Credit'
const pipServiceName = 'Apply for Personal Independence Payment (PIP)'
const rmdServiceName = 'Repay my debt to DWP'
const atwServiceName = 'Access To Work Payment Support'
const atwServiceName2 = 'Claim money back from Access to Work'
const spfServiceName = 'Shared Prosperity Fund'
const applydroneServiceName = 'Apply for a drone licence'

module.exports = {
  'dth-service-name': dthServiceName,
  'dss-service-name': dssServiceName,
  'carers-service-name': carersServiceName,
  'pension-credit-service-name': pensionCreditServiceName,
  'apply-for-pip-service-name': pipServiceName,
  'repay-my-debt-service-name': rmdServiceName,
  'access-to-work-service-name': atwServiceName,
  'access-to-work-service-name2': atwServiceName2,
  'shared-prosperity-fund-service-name': spfServiceName,
  'apply-for-a-drone-licence-service-name': applydroneServiceName,
  'service-name': '',
  'citizen-name': 'Leslie Carter',
  'auth': '9',
  'idv': '5',
  'idvHappy': 'true',
  'citizen-benefits': 'esa,pip',
  'cxp': '2',
  'esa-status': 'ok',
  'pip-status': 'ok',

  // Dates generates by MomentJS
  'next-week': nextWeek,
  'in-2-weeks': in2weeks,
  'in-2-weeks-abbr': in2weeksAbbr,
  'in-4-weeks': in4weeks,
  'in-4-weeks-abbr': in4weeksAbbr,
  'last-week': lastWeek,
  'last-week-abbr': lastWeekAbbr,
  'three-weeks': threeWeeks,
  'three-years-ago': threeYearsAgo,
  'thirty-one-months-ago': thirtyOneMonthsAgo,
  'yesterday': yesterday,
  'yesterday-abbr': yesterdayAbbr,
  '2-weeks-ago': twoWeeksAgo,
  '2-weeks-ago-abbr': twoWeeksAgoAbbr,
  '4-weeks-ago': fourWeeksAgo,
  '6-weeks-ago': sixWeeksAgo,
  '8-weeks-ago': eightWeeksAgo,
  '10-weeks-ago': tenWeeksAgo,
  '12-weeks-ago': twelveWeeksAgo,
  '14-weeks-ago': fourteenWeeksAgo,
  '14-weeks-ago-hmrc': fourteenWeeksAgoHMRC,
  '16-weeks-ago': sixteenWeeksAgo,
  '20-weeks-ago': twentyWeeksAgo,
  '24-weeks-ago': twentyFourWeeksAgo,
  '28-weeks-ago': twentyEightWeeksAgo,
  '32-weeks-ago': thirtyTwoWeeksAgo,
  '18-months-ago': eighteenMonthsAgo,
  'pip-payment': '606',
  'daily-living-enhanced': '89.15',
  'mobility-enhanced': '62.35',
  'esa-payment': '302.80',
  'esa-award-weekly': '197.60',
  'esa-award-weekly-x2': '395.20',
  'esa-payment-weekly-reduced': '151.40',
  'esa-adjustments': '92.40',
  'pip-award-weekly': '151.50',

}
