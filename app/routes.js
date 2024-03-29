const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Branching your-contact-channels
router.post('/e-one/your-contact-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/e-one/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/e-one/benefit-summary')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/e-one/webchat-service')
  }

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/e-one/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/e-one/thank-you-close')
    }

})

router.post('/e-one/contact-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact']

  if (contactChannel === 'webchat') {
    res.redirect('/e-one/webchat-service')
  }

  else  {
    res.redirect('/e-one/thank-you')
  }


})

// Branching Experiement 2 Information-channels
router.post('/e-two/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/e-two/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/e-two/benefit-summary')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/e-two/webchat-service')
  }

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/e-two/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/e-two/thank-you-close')
    }

})

router.post('/e-two/contact-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact']

  if (contactChannel === 'webchat') {
    res.redirect('/e-two/webchat-service')
  }

  else  {
    res.redirect('/e-two/thank-you')
  }


})

// Branching Experiement 3 Find-Information
router.post('/e-three/find-info', function (req, res) {


  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'esa-service') {
    res.redirect('/e-three/digital-service/start')
  }

  else if (contactChannel === 'pip-service') {
    res.redirect('/e-three/digital-service-2/start')
  }

  else if (contactChannel === 'local-authority') {
    res.redirect('https://www.gov.uk/housing-benefit')
  }

  else if (contactChannel === 'adviser') {
      res.redirect('/e-three/telephone-information')
  }
  else if (contactChannel === 'dla-service') {
      res.redirect('/e-three/digital-service-3/start')
  }
  else if (contactChannel === 'govuk') {
    res.redirect('https://www.gov.uk/')
  }

})

// Branching Experiement 3 b1-Information
router.post('/e-three/b1-information', function (req, res) {


  const infoNeed = req.session.data['info-need']

  if (infoNeed === 'loe') {
    res.redirect('/e-three/digital-service/b1-loe')
  }

  else if (infoNeed === 'payment-info') {
    res.redirect('/e-three/digital-service/payments')
  }

  else if (infoNeed === 'status') {
    res.redirect('/e-three/digital-service/b1-status')
  }

  else if (infoNeed === 'adviser') {
      res.redirect('/e-three/digital-service/telephone-information')
  }

})

// Branching Experiement 3 b1-Information
router.post('/e-three/more-info-need', function (req, res) {


  const infoNeed = req.session.data['more-info-need']

  if (infoNeed === 'yes') {
    res.redirect('/e-three/digital-service/b1-information')
  }

  else if (infoNeed === 'no') {
    res.redirect('/e-three/digital-service/thank-you')
  }


})

// Branching Experiement 3 b2-info
router.post('/e-three/b2-info', function (req, res) {


  const infoNeed = req.session.data['search-channel']

  if (infoNeed === 'google') {
    res.redirect('https://google.com')
  }

  else if (infoNeed === 'govuk') {
    res.redirect('https://www.gov.uk/browse/benefits')
  }


})

// Branching Experiement 3 b2-Information
router.post('/e-three/b3-information', function (req, res) {


  const infoNeed = req.session.data['info-need']

  if (infoNeed === 'loe') {
    res.redirect('/e-three/digital-service/b3-loe')
  }

  else if (infoNeed === 'payment-info') {
    res.redirect('/e-three/digital-service/payments')
  }

  else if (infoNeed === 'status') {
    res.redirect('/e-three/digital-service/b3-status')
  }

  else if (infoNeed === 'adviser') {
      res.redirect('/e-three/digital-service/telephone-information')
  }

})


// Branching Experiement 3 b1-Information
router.post('/e-three/more-info-need-ca', function (req, res) {


  const infoNeed = req.session.data['more-info-need']

  if (infoNeed === 'yes') {
    res.redirect('/e-three/digital-service-3/b3-information')
  }

  else if (infoNeed === 'no') {
    res.redirect('/e-three/digital-service-3/thank-you')
  }


})


// Branching Experiement 3 V2 Information-channels
router.post('/e-three/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/e-three/concept-2/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/e-three/concept-2/ni-number')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/e-three/concept-2/webchat-service')
  }

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/e-three/concept-2/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/e-three/concept-2/thank-you-close')
    }

})


router.post('/e-three/contact-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact']

  if (contactChannel === 'webchat') {
    res.redirect('/e-three/concept-2/webchat-service')
  }

  else  {
    res.redirect('/e-three/concept-2/thank-you')
  }


})


// Branching V4


// Branching Experiement 3 V2 Information-channels
router.post('/e-four/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/e-four/concept-2/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/e-four/concept-2/ni-number')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/e-four/concept-2/webchat-service')
  }

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/e-four/concept-2/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/e-four/concept-2/thank-you-close')
    }

})


router.post('/e-four/concepts', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['concepts']

  if (contactChannel === 'concept-1') {
    res.redirect('/e-four/your-benefit-information')
  }

  else  {
    res.redirect('/e-four/concept-2/start')
  }


})
router.post('/e-five/concepts', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['concepts']

  if (contactChannel === 'concept-1') {
    res.redirect('/e-five/your-benefit-information')
  }

  else  {
    res.redirect('/e-five/concept-2/start')
  }


})

router.post('/e-five/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/e-five/concept-2/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/e-five/concept-2/ni-number')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/e-five/concept-2/webchat-service')
  }

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/e-five/concept-2/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/e-five/concept-2/thank-you-close')
    }

})

router.post('/customer-view/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['contact-channel']

  if (contactChannel === 'telephone') {
    res.redirect('/customer-view/concept-2/telephone-information')
  }

  else if (contactChannel === 'dss-signin') {
    res.redirect('/customer-view/concept-2/benefit-summary')
  }

  else if (contactChannel === 'chat-bots') {
    res.redirect('/customer-view/concept-2/webchat-service')
  }

    else if (contactChannel === 'no-i-did-not-found-info') {
      res.redirect('/customer-view/concept-2/did-you-get-all-info-no')
    }
    else if (contactChannel === 'no-i-do-not') {
      res.redirect('/customer-view/concept-2/thank-you-close')
    }
    

})

//Customer View Authentication Options
router.post('/customer-view/authentication-options', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const authenticationOption = req.session.data['authentication-option']

  if (authenticationOption === 'create') {
    res.redirect('/customer-view/concept-2/telephone-information')
  }

  else if (authenticationOption === 'signin-options') {
    res.redirect('/customer-view/concept-2/login')
  }

  else if (authenticationOption === 'chat-bots') {
    res.redirect('/customer-view/concept-2/webchat-service')
  }

    else if (authenticationOption === 'no-i-did-not-found-info') {
      res.redirect('/customer-view/concept-2/did-you-get-all-info-no')
    }
    else if (authenticationOption === 'no-i-do-not') {
      res.redirect('/customer-view/concept-2/thank-you-close')
    }

})
//SPRINT 2 ROUTES
//Sprint 2 prototype selection (scenario page)
router.post('/sprint-2/prototypes', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const contactChannel = req.session.data['prototypes']

  if (contactChannel === 'prototype-1') {
    res.redirect('/sprint-2/digital-service/start')
  }

  else  {
    res.redirect('/sprint-2/prototype-2/start')
  }


})

//Customer View Sprint 2 Authentication Options
router.post('/sprint-2/authentication-options', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const authenticationOption = req.session.data['authentication-option']

  if (authenticationOption === 'create') {
    res.redirect('/sprint-2/concept-2/telephone-information')
  }

  else if (authenticationOption === 'signin-options') {
    res.redirect('/sprint-2/concept-2/login')
  }

  else if (authenticationOption === 'chat-bots') {
    res.redirect('/sprint-2/concept-2/webchat-service')
  }

    else if (authenticationOption === 'no-i-did-not-found-info') {
      res.redirect('/sprint-2/concept-2/did-you-get-all-info-no')
    }
    else if (authenticationOption === 'no-i-do-not') {
      res.redirect('/sprint-2/concept-2/thank-you-close')
    }

})

// Sprint 2 information channel routes - what do you want to do?
router.post('/sprint-2/digital-service/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const optionSelection = req.session.data['option-selection']

  if (optionSelection === 'next-payment') {
    res.redirect('/sprint-2/digital-service/next-payment')
  }

  else if (optionSelection === 'payment-history') {
    res.redirect('/sprint-2/digital-service/payments-history')
  }

  else if (optionSelection === 'personal-details') {
    res.redirect('/sprint-2/digital-service/personal-details')
  }

  else if (optionSelection === 'bank-details') {
    res.redirect('/sprint-2/digital-service/bank-details')
  }

  else if (optionSelection === 'chat-bots') {
    res.redirect('/sprint-2/concept-2/webchat-service')
  }

    else if (optionSelection === 'pob') {
      res.redirect('/sprint-2/digital-service/pob-overview')
    }
    else if (optionSelection === 'no-i-do-not') {
      res.redirect('/e-four/concept-2/thank-you-close')
    }
    
    else if (optionSelection === 'evidence') {
      res.redirect ('/sprint-2/digital-service/information-channels')
    }
 
    else  {
      res.redirect('/sprint-2/digital-service/information-channels-error')
    }

})


// Sprint 2 information channel routes that skip IDV - what do you want to do?
router.post('/sprint-2/digital-service/information-channels-page-two', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const optionSelection = req.session.data['option-selection']

  if (optionSelection === 'next-payment') {
    res.redirect('/sprint-2/digital-service/next-payment')
  }

  else if (optionSelection === 'payment-history') {
    res.redirect('/sprint-2/digital-service/payments-history')
  }

  else if (optionSelection === 'personal-details') {
    res.redirect('/sprint-2/digital-service/personal-details')
  }

  else if (optionSelection === 'bank-details') {
    res.redirect('/sprint-2/digital-service/bank-details')
  }

  else if (optionSelection === 'chat-bots') {
    res.redirect('/sprint-2/concept-2/webchat-service')
  }

    else if (optionSelection === 'pob') {
      res.redirect('/sprint-2/digital-service/pob-overview')
    }
    else if (optionSelection === 'no-i-do-not') {
      res.redirect('/e-four/concept-2/thank-you-close')
    }

    else  {
      res.redirect('/sprint-2/digital-service/information-channels-error')
    }

})

//Sprint 2 pob-format-selection page
router.post('/sprint-2/digital-service/pob-format-selection', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const pobFormat = req.session.data['pob-format-selection']

  if (pobFormat === 'digital-copy') {
    res.redirect('/sprint-2/digital-service/pob-selection-digital')
  }
  
  else if (pobFormat === 'printed-copy') {
    res.redirect('/sprint-2/digital-service/pob-selection-printed')
  }
  else if (pobFormat === 'shareable-code') {
    res.redirect('/sprint-2/digital-service/pob-selection-code')
  }


})

//Sprint 2 pob-selection page
router.post('/sprint-2/digital-service/pob-selection-digital', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const pobSelection = req.session.data['pob-selection']

  if (pobSelection === 'esa-letter') {
    res.redirect('/sprint-2/digital-service/pob-esa')
  }

  else if (pobSelection === 'carers-letter') {

    res.redirect('/sprint-2/digital-service/pob-carers')
  }

  else {
    res.redirect('/sprint-2/digital-service/pob-selection-digital-error')
  }

})

//Sprint 2 next-payment page - do you want to do anything else question
router.post('/sprint-2/digital-service/next-payment', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-2/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-2/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-2/digital-service/next-payment-error')
  }


})

//Sprint 2 payments-history page - do you want to do anything else question
router.post('/sprint-2/digital-service/payments-history', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-2/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-2/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-2/digital-service/payments-history-error')
  }


})

//Sprint 2 personal details page - do you want to do anything else question
router.post('/sprint-2/digital-service/personal-details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-2/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-2/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-2/digital-service/personal-details-error')
  }


})

//Sprint 2 bank details page - do you want to do anything else question
router.post('/sprint-2/digital-service/bank-details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-2/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-2/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-2/digital-service/bank-details-error')
  }


})

//Sprint 2 telephne information page - do you want to do anything else question
router.post('/sprint-2/digital-service/telephone-information', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-2/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-2/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-2/digital-service/telephone-information-error')
  }


})

//Sprint 2 payments-history page - do you want to do anything else question
router.post('/sprint-2/digital-service/return-to-tasks', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-2/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-2/digital-service/thank-you-close')
  }
  
  else {
    res.redirect('/sprint-2/digital-service/return-to-tasks-error')
  }


})

//Sprint 2 pob-carers do you want more proof of benefits?
router.post('/sprint-2/digital-service/pob-carers', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const otherPOB = req.session.data['other-pob']


  if (otherPOB === 'yes-more') {
    res.redirect('/sprint-2/digital-service/pob-selection-digital')
  }

  else if (otherPOB === 'no-more') {
    res.redirect('/sprint-2/digital-service/return-to-tasks')
  }

  else {
    res.redirect('/sprint-2/digital-service/pob-carers-error')
  }

})


//Sprint 2 pob-esa do you want more proof of benefits?
router.post('/sprint-2/digital-service/pob-esa', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const otherPOB = req.session.data['other-pob']

  if (otherPOB === 'yes-more') {
    res.redirect('/sprint-2/digital-service/pob-selection-digital')
  }

  else if (otherPOB === 'no-more') {
    res.redirect('/sprint-2/digital-service/return-to-tasks')
  }

  else {
    res.redirect('/sprint-2/digital-service/pob-esa-error')
  }

})

// SPRINT 9 ROUTES

// Sprint 9 information channel routes - what do you want to do?
router.post('/sprint-9/digital-service/information-channels', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const optionSelection = req.session.data['option-selection']

  if (optionSelection === 'next-payment') {
    res.redirect('/sprint-9/digital-service/next-payment')
  }

  else if (optionSelection === 'payment-history') {
    res.redirect('/sprint-9/digital-service/payments-history')
  }

  else if (optionSelection === 'personal-details') {
    res.redirect('/sprint-9/digital-service/personal-details')
  }

  else if (optionSelection === 'bank-details') {
    res.redirect('/sprint-9/digital-service/bank-details')
  }

  else if (optionSelection === 'chat-bots') {
    res.redirect('/sprint-9/concept-2/webchat-service')
  }

    else if (optionSelection === 'pob') {
      res.redirect('/sprint-9/digital-service/pob-overview')
    }
    else if (optionSelection === 'no-i-do-not') {
      res.redirect('/e-four/concept-2/thank-you-close')
    }

    else  {
      res.redirect('/sprint-9/digital-service/information-channels-error')
    }

})

// Sprint 9 information channel routes - what do you want to do?
router.post('/sprint-9/digital-service/information-channels-page-two  ', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const optionSelection = req.session.data['option-selection']

  if (optionSelection === 'next-payment') {
    res.redirect('/sprint-9/digital-service/next-payment')
  }

  else if (optionSelection === 'payment-history') {
    res.redirect('/sprint-9/digital-service/payments-history')
  }

  else if (optionSelection === 'personal-details') {
    res.redirect('/sprint-9/digital-service/personal-details')
  }

  else if (optionSelection === 'bank-details') {
    res.redirect('/sprint-9/digital-service/bank-details')
  }

  else if (optionSelection === 'chat-bots') {
    res.redirect('/sprint-9/concept-2/webchat-service')
  }

    else if (optionSelection === 'pob') {
      res.redirect('/sprint-9/digital-service/pob-overview')
    }
    else if (optionSelection === 'no-i-do-not') {
      res.redirect('/e-four/concept-2/thank-you-close')
    }

    else  {
      res.redirect('/sprint-9/digital-service/information-channels-error')
    }

})

//Sprint 2 next-payment page - do you want to do anything else question
router.post('/sprint-9/digital-service/next-payment', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-9/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-9/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-9/digital-service/next-payment-error')
  }


})

//Sprint 2 payments-history page - do you want to do anything else question
router.post('/sprint-9/digital-service/payments-history', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-9/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-9/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-9/digital-service/payments-history-error')
  }


})

//Sprint 9 personal details page - do you want to do anything else question
router.post('/sprint-9/digital-service/personal-details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-9/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-9/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-9/digital-service/personal-details-error')
  }


})

//Sprint 9 bank details page - do you want to do anything else question
router.post('/sprint-9/digital-service/bank-details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-9/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-9/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-9/digital-service/bank-details-error')
  }


})

//Sprint 9 telephne information page - do you want to do anything else question
router.post('/sprint-9/digital-service/telephone-information', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-9/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-9/digital-service/thank-you-close')
  }

  else  {
    res.redirect('/sprint-9/digital-service/telephone-information-error')
  }


})

//Sprint 9 payments-history page - do you want to do anything else question
router.post('/sprint-9/digital-service/return-to-tasks', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const anythingElse = req.session.data['anything-else']

  if (anythingElse === 'yes') {
    res.redirect('/sprint-9/digital-service/information-channels-page-two')
  }

  else if (anythingElse === 'no') {
    res.redirect('/sprint-9/digital-service/thank-you-close')
  }
  
  else {
    res.redirect('/sprint-9/digital-service/return-to-tasks-error')
  }


})

//Sprint 2 pob-selection page
router.post('/sprint-9/digital-service/pob-selection-digital', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const pobSelection = req.session.data['pob-selection']

  if (pobSelection === 'esa-letter') {
    res.redirect('/sprint-9/digital-service/pob-esa')
  }

  else if (pobSelection === 'carers-letter') {

    res.redirect('/sprint92/digital-service/pob-carers')
  }

  else {
    res.redirect('/sprint-9/digital-service/pob-selection-digital-error')
  }

})


//Sprint 9 pob-carers do you want more proof of benefits?
router.post('/sprint-9/digital-service/pob-carers', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const otherPOB = req.session.data['other-pob']


  if (otherPOB === 'yes-more') {
    res.redirect('/sprint-9/digital-service/pob-selection-digital')
  }

  else if (otherPOB === 'no-more') {
    res.redirect('/sprint-9/digital-service/return-to-tasks')
  }

  else {
    res.redirect('/sprint-9/digital-service/pob-carers-error')
  }

})


//Sprint 2 pob-esa do you want more proof of benefits?
router.post('/sprint-9/digital-service/pob-esa', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const otherPOB = req.session.data['other-pob']

  if (otherPOB === 'yes-more') {
    res.redirect('/sprint-9/digital-service/pob-selection-digital')
  }

  else if (otherPOB === 'no-more') {
    res.redirect('/sprint-9/digital-service/return-to-tasks')
  }

  else {
    res.redirect('/sprint-9/digital-service/pob-esa-error')
  }

})



//OIDV ROUTES
//IDV HMRC IDVSELECTION

// Import version-specific routes
const cxpRoutes = require('./routes/cxp')
const authRoutes = require('./routes/auth')
const idvRoutes = require('./routes/idv')
const idnRoutes = require('./routes/idn')
const idpRoutes = require('./routes/idp')

router.use('/', cxpRoutes)
router.use('/', authRoutes)
router.use('/', idvRoutes)
router.use('/', idnRoutes)
router.use('/', idpRoutes)

// Prototype-wide routing
router.post('/prototype-submit', (req, res, next) => {
  const currentUrl = req.protocol + '://' + req.get('host')
  // Get journey start and service name from journey-start value
  const journeyDetails = req.session.data['journey-start']
  const journeyDetailsArr = journeyDetails.split(',')
  const journeyStart = journeyDetailsArr[0]
  const serviceName = req.session.data[
    journeyDetailsArr[1] === 'carers' ? 'carers-service-name': 'dss-service-name'
  ]
  req.session.data['service-name'] = serviceName

  // Other variables
  const citizenName = req.session.data['citizen-name']
  const citizenBenefits = req.session.data['citizen-benefits']
  const cxp = req.session.data['cxp']
  const esaStatus = req.session.data['esa-status']
  const pipStatus = req.session.data['pip-status']
  const auth = req.session.data['auth']
  const idv = req.session.data['idv']
  const idvHappy = req.session.data['idvHappy']
  req.session.data['generated-link'] = currentUrl + journeyStart + '?' + 
    'citizen-name=' + citizenName + '&' + 
    'service-name=' + serviceName + '&' + 
    'citizen-benefits=' + citizenBenefits + '&' + 
    'cxp=' + cxp  + '&' + 
    'esa-status=' + esaStatus  + '&' + 
    'pip-status=' + pipStatus  + '&' + 
    'auth=' + auth  + '&' + 
    'idv=' + idv  + '&' + 
    'idvHappy=' + idvHappy 
  const action = req.session.data['action']
  if (action === 'generateLink') {
    res.redirect('/generate-link')
  } else {
    res.redirect(journeyStart)
  }
})