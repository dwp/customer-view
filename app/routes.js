//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Prototype specific routes
const discoveryRoutes = require('./routes/discovery-experiments')
router.use('/', discoveryRoutes)

//radio options
// this is for radio selection for 1st page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-1', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['Have-you-used-this-service-before']

  // Check whether the variable matches a condition
  if (howManyBalls == "No"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-1');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 2nd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitChange = req.session.data['Do-you-need-to-change-bank-details-for-benefits-State-Pension-or-both']

  // Check whether the variable matches a condition
  if (benefitChange == "Benefits"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-2');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-3', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var changeBankdetails = req.session.data['Do-you-need-to-change-bank-details-for-your-own-benefit-payments']

  // Check whether the variable matches a condition
  if (changeBankdetails == "Yes for my own"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-3');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-5', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var whereBenefitPaid = req.session.data['Where-do-your-benefits-get-paid']

  // Check whether the variable matches a condition
  if (whereBenefitPaid == "Bank account"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-5');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})
// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-6', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaid = req.session.data['paid-into-UK-bank-account']

  // Check whether the variable matches a condition
  if (benefitPaid == "Yes"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-6');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-7', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaid = req.session.data['new-account-based-in-the-UK']

  // Check whether the variable matches a condition
  if (benefitPaid == "Yes"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-question-7');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})


// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-eligible', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var paymentDue = req.session.data['payment-due-within-the-next-six-working-days']

  // Check whether the variable matches a condition
  if (paymentDue == "No"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/Eligibility-questions/eligibility-eligible');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})


// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/list-homepage/esa-New-bankdetails', function (req, res) {

  req.session.data['new-name-on-the-account']='';
  req.session.data['new-sort-code']='';
  req.session.data['new-account-number']='';
  req.session.data['new-roll-number']='';
  // Make a variable and give it the value from 'how-many-balls'
  var changePayment = req.session.data['interview-needs']

  // Check whether the variable matches a condition
  if (changePayment == "yes"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/list-homepage/esa-New-bankdetails');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 3rd page
router.post('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/list-homepage/Before-you-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var oneBankAccount = req.session.data['payments-into-one-bank-account']

  // Check whether the variable matches a condition
  if (oneBankAccount == "yes"){
    // Send user to next page
    res.redirect('/V42_2-Change-bank-details-user-testing-2/Change-bank-details-user-testing-2/list-homepage/Before-you-change-bank-details');

  } else {
    // Send user back to same page
    res.redirect('back');
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




//Alpha assessment prototype start here


// How did you find about this service
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/check-if-you-can-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['How-did-you-find-out-about-this-service']

  // Check whether the variable matches a condition
  if (findService == "Letter"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/check-if-you-can-change-bank-details');

  } else {
    // Send on contact us page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/can-not-use-this-service');
  }

})

//radio options
// this is for radio selection for 1st page
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-1', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var usedServicebefore = req.session.data['Have-you-used-this-service-before']

  // Check whether the variable matches a condition
  if (usedServicebefore == "No"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-1');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 2nd page
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var changeDetail = req.session.data['change-bank-details-for-benefits-State-Pension-or-both']

  // Check whether the variable matches a condition
  if (changeDetail == "Benefits"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-2');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})


// for who does the payment belongs to?
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-3', function (req, res) {

  req.session.data['Which-benefits-do-you-get']='';

  // Make a variable and give it the value from 'how-many-balls'
  var changeFor = req.session.data['Do-you-need-to-change-bank-details-for-your-own-benefit-payments']

  // Check whether the variable matches a condition
  if (changeFor == "Yes for my own"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-3');

  } else {
      // Check whether the variable matches a condition
    if (changeFor == "someone else"){
      // Send user to next page
      res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/someone-else');
   } else {
    // Send user back to same page
    res.redirect('back');
  }
}

})


// this is for radio selection for 3rd page
router.post('V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-5', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaid = req.session.data['benefits-get-paid']

  // Check whether the variable matches a condition
  if (benefitPaid == "Not-sure"){
    // Send user to next page
     res.redirect('V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-5');
  } else {
            // Send user back to same page
            res.redirect('back');
  }

}) 


// Do you benefit paid into UK bank account?
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-6', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaidUK = req.session.data['paid-into-UK-bank-account']

  // Check whether the variable matches a condition
  if (benefitPaidUK == "Yes"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-6');
  } else {
    if (benefitPaidUK == "No"){
    // Send on contact us page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/non-UKBank-message');
    } else {
    // Send user back to same page
    res.redirect('back');
  }
}
})

// Do you benefit paid into UK bank account?
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-7', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var newBankUK = req.session.data['Is-your-new-account-also-based-in-the-UK']

  // Check whether the variable matches a condition
  if (newBankUK == "Yes"){
       // Send next page
       res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-7');
  } else {
    if (newBankUK == "No"){
      // Send on contact us page
      res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/non-UKBank-message');
      }
      else {
      // Send user back to same page
      res.redirect('back');
    }
  }
})
// Do you benefit paid into UK bank account?
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-eligible', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var duePayment = req.session.data['payment-due-within-the-next-six-working-days']

  // Check whether the variable matches a condition
  if (duePayment == "Yes"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/paymentdue');

  } else {
    if (duePayment == "No"){
      // Send user to next page
      res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/Eligibility-questions/eligibility-eligible');
    } else {
      // Send user back to same page
      res.redirect('back');
    }
}

})


// this is for radio selection for 3rd page
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/list-homepage/esa-New-bankdetails', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var changeBank = req.session.data['Before-you-change-bank-details']

  // Check whether the variable matches a condition
  if (changeBank == "Yes"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/list-homepage/esa-New-bankdetails');

  } else {
    // Send on contact us page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/list-homepage/contactus');
  }

})

// this is for radio selection for List home page
router.post('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/list-homepage/Before-you-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var intoOneAccount = req.session.data['payments-into-one-bank-account']

  // Check whether the variable matches a condition
  if (intoOneAccount == "into one account"){
    // Send user to next page
    res.redirect('/V4_3-Change-bank-details-user-testing-3/Change-bank-details-iteration-3/list-homepage/Before-you-change-bank-details');

  } else {
    // Send user back to same page
    res.redirect('back');
  }

})


// code for dynamic prototype - ur14


// How did you find about this service
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/check-if-you-can-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['How-did-you-find-out-about-this-service']

  // Check whether the variable matches a condition
  if (findService == "Letter"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/check-if-you-can-change-bank-details');

  } else {
    // Send on contact us page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/can-not-use-this-service');
  }

})

//radio options
// this is for radio selection for 1st page
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-1', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var usedServicebefore = req.session.data['Have-you-used-this-service-before']

  // Check whether the variable matches a condition
  if (usedServicebefore == "No"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-1');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 2nd page
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var changeDetail = req.session.data['change-bank-details-for-benefits-State-Pension-or-both']

  // Check whether the variable matches a condition
  if (changeDetail == "Benefits"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-2');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})


// for who does the payment belongs to?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-3', function (req, res) {

  req.session.data['Which-benefits-do-you-get']='';

  // Make a variable and give it the value from 'how-many-balls'
  var changeFor = req.session.data['Do-you-need-to-change-bank-details-for-your-own-benefit-payments']

  // Check whether the variable matches a condition
  if (changeFor == "Yes for my own"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-3');

  } else {
      // Check whether the variable matches a condition
    if (changeFor == "someone else"){
      // Send user to next page
      res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/someone-else');
   } else {
    // Send user back to same page
    res.redirect('back');
  }
}

})

// for who does the payment belongs to?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-4', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitsYouGet = req.session.data['Which-benefits-do-you-get']

  // Check whether the variable matches a condition
  if (benefitsYouGet == "I get a different benefit"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/get-different-benefits');

  } else {
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-4');
}
})


// this is for radio selection for 3rd page
router.post('V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-5', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaid = req.session.data['benefits-get-paid']

  // Check whether the variable matches a condition
  if (benefitPaid == "Not-sure"){
    // Send user to next page
     res.redirect('V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-5');
  } else {
            // Send user back to same page
            res.redirect('back');
  }

}) 


// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-6', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaidUK = req.session.data['paid-into-UK-bank-account']

  // Check whether the variable matches a condition
  if (benefitPaidUK == "Yes"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-6');
  } else {
    if (benefitPaidUK == "No"){
    // Send on contact us page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/non-UKBank-message');
    } else {
    // Send user back to same page
    res.redirect('back');
  }
}
})

// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-7', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var newBankUK = req.session.data['Is-your-new-account-also-based-in-the-UK']

  // Check whether the variable matches a condition
  if (newBankUK == "Yes"){
       // Send next page
       res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-question-7');
  } else {
    if (newBankUK == "No"){
      // Send on contact us page
      res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/non-UKBank-message');
      }
      else {
      // Send user back to same page
      res.redirect('back');
    }
  }
})

// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-eligible', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var duePayment = req.session.data['payment-due-within-the-next-six-working-days']

  // Check whether the variable matches a condition
  if (duePayment == "No"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-eligible');

    } else {
      // Send user payment due page
      res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/paymentdue');
    }

})


// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-eligible-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var basedAnswerCont = req.session.data['Do-you-want-to-continue']

  // Check whether the variable matches a condition
  if (basedAnswerCont == "No"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/unhappy-path/contactUs');

    } else {
      // Send user payment due page
      res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/Eligibility-questions/eligibility-eligible-2');
    }

})


// // Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/Before-you-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var paymentDue = req.session.data['payment-due-within-the-next-six-working-days']

  // Check whether the variable matches a condition
  if (paymentDue == "Yes") {
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/payment-in-progress');
  }
  else {
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/Before-you-change-bank-details');
  }
})



// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/all-benefits-in-One-account', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var confirmBeforeChange = req.session.data['Before-you-change-bank-details']
  var benefitPayAccount = req.session.data['payments-into-one-bank-account']
  // Check whether the variable matches a condition
  if (confirmBeforeChange == "No") {
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/contactus'); 
  } else {  
      req.session.data['oneAccount'] = '';
      req.session.data['dataName'] = '';
      req.session.data['new-name-on-the-account'] = '';
      req.session.data['new-sort-code'] = '';
      req.session.data['new-account-number'] = '';
      req.session.data['new-roll-number'] = '';
      if (benefitPayAccount == "into one account") {
        res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/all-benefits-in-One-account');
      } else if (benefitPayAccount == "into separate account") {  
        req.session.data['benefitNumber'] = 0
        res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/multiple-account/new-bankdetail-for-1');
      }
  } 

})


router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/multiple-account/new-bankdetail-for-1-answers', function (req, res) {

  var benefitAmount = req.session.data['Which-benefits-do-you-get-1']
  var nextBenefitNumber = req.session.data['benefitNumber'] + 1
  
  if(benefitAmount.length == nextBenefitNumber ){
    res.redirect('../check-answers')
  }
  else {
    // Make sure we change this benefitNumber 
    req.session.data['benefitNumber'] = nextBenefitNumber
    res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/multiple-account/new-bankdetail-for-1')
  }
})


// confirmation page based on the due date within 6 days or not
router.post('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/confirmation', function (req, res) {

   // Make a variable and give it the value from 'how-many-balls'
   var paymentDue = req.session.data['payment-due-within-the-next-six-working-days']

   // Check whether the variable matches a condition
   if (paymentDue == "Yes") {
     res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/confirmation-2');
   }
   else {
     res.redirect('/V5-dynamic-prototype/Change-bank-details-iteration-3/list-homepage/confirmation');
   }
 })




 //just for OIDV for Andy's demo - remove after that
 

// Common error page for OIDV Security number
// this is for NINO number for UR round-5
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/list-home-page', function (req, res) {
if (req.session.data['signin-code'] == '471350') {
  // Send user to next page
  res.render('V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/list-home-page')
} else {
  var errMsg = "";
  if (req.session.data['signin-code'] == '' || req.session.data['signin-code'] == undefined) {
    errMsg = "Enter your security code";
  } else {
    errMsg = "Security code does not match the one we sent you";
  }
  // Send user to error page
  res.render('V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/OIDV/authenticate/sign-in-2fa-Error', { "errMsg": errMsg });
}
})


// How did you find about this service
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/check-if-you-can-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['How-did-you-find-out-about-this-service']

  // Check whether the variable matches a condition
  if (findService == "Letter"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/check-if-you-can-change-bank-details');

  } else {
    // Send on contact us page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/unhappy-path/can-not-use-this-service');
  }

})

//radio options
// this is for radio selection for 1st page
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-1', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var usedServicebefore = req.session.data['Have-you-used-this-service-before']

  // Check whether the variable matches a condition
  if (usedServicebefore == "No"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-1');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for radio selection for 2nd page
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var changeDetail = req.session.data['change-bank-details-for-benefits-State-Pension-or-both']

  // Check whether the variable matches a condition
  if (changeDetail == "Benefits"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-2');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})


// for who does the payment belongs to?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-3', function (req, res) {

  req.session.data['Which-benefits-do-you-get']='';

  // Make a variable and give it the value from 'how-many-balls'
  var changeFor = req.session.data['Do-you-need-to-change-bank-details-for-your-own-benefit-payments']

  // Check whether the variable matches a condition
  if (changeFor == "Yes for my own"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-3');

  } else {
      // Check whether the variable matches a condition
    if (changeFor == "someone else"){
      // Send user to next page
      res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/unhappy-path/someone-else');
   } else {
    // Send user back to same page
    res.redirect('back');
  }
}

})

// for who does the payment belongs to?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-4', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitsYouGet = req.session.data['Which-benefits-do-you-get']

  // Check whether the variable matches a condition
  if (benefitsYouGet == "I get a different benefit"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/unhappy-path/get-different-benefits');

  } else {
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-4');
}
})


// this is for radio selection for 3rd page
router.post('V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-5', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaid = req.session.data['benefits-get-paid']

  // Check whether the variable matches a condition
  if (benefitPaid == "Not-sure"){
    // Send user to next page
     res.redirect('V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-5');
  } else {
            // Send user back to same page
            res.redirect('back');
  }

}) 


// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-6', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitPaidUK = req.session.data['paid-into-UK-bank-account']

  // Check whether the variable matches a condition
  if (benefitPaidUK == "Yes"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-6');
  } else {
    if (benefitPaidUK == "No"){
    // Send on contact us page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/unhappy-path/non-UKBank-message');
    } else {
    // Send user back to same page
    res.redirect('back');
  }
}
})

// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-7', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var newBankUK = req.session.data['Is-your-new-account-also-based-in-the-UK']

  // Check whether the variable matches a condition
  if (newBankUK == "Yes"){
       // Send next page
       res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-question-7');
  } else {
    if (newBankUK == "No"){
      // Send on contact us page
      res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/unhappy-path/non-UKBank-message');
      }
      else {
      // Send user back to same page
      res.redirect('back');
    }
  }
})

// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-eligible', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var duePayment = req.session.data['payment-due-within-the-next-six-working-days']

  // Check whether the variable matches a condition
  if (duePayment == "No"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-eligible');

    } else {
      // Send user payment due page
      res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/paymentdue');
    }

})


// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-eligible-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var basedAnswerCont = req.session.data['Do-you-want-to-continue']

  // Check whether the variable matches a condition
  if (basedAnswerCont == "No"){
    // Send user to next page
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/unhappy-path/contactUs');

    } else {
      // Send user payment due page
      res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/Eligibility-questions/eligibility-eligible-2');
    }

})


// // Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/Before-you-change-bank-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var paymentDue = req.session.data['payment-due-within-the-next-six-working-days']

  // Check whether the variable matches a condition
  if (paymentDue == "Yes") {
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/payment-in-progress');
  }
  else {
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/Before-you-change-bank-details');
  }
})



// Do you benefit paid into UK bank account?
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/all-benefits-in-One-account', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var confirmBeforeChange = req.session.data['Before-you-change-bank-details']
  var benefitPayAccount = req.session.data['payments-into-one-bank-account']
  // Check whether the variable matches a condition
  if (confirmBeforeChange == "No") {
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/contactus'); 
  } else {  
      req.session.data['oneAccount'] = '';
      req.session.data['dataName'] = '';
      req.session.data['new-name-on-the-account'] = '';
      req.session.data['new-sort-code'] = '';
      req.session.data['new-account-number'] = '';
      req.session.data['new-roll-number'] = '';
      if (benefitPayAccount == "into one account") {
        res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/all-benefits-in-One-account');
      } else if (benefitPayAccount == "into separate account") {  
        req.session.data['benefitNumber'] = 0
        res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/multiple-account/new-bankdetail-for-1');
      }
  } 

})


router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/multiple-account/new-bankdetail-for-1-answers', function (req, res) {

  var benefitAmount = req.session.data['Which-benefits-do-you-get-1']
  var nextBenefitNumber = req.session.data['benefitNumber'] + 1
  
  if(benefitAmount.length == nextBenefitNumber ){
    res.redirect('../check-answers')
  }
  else {
    // Make sure we change this benefitNumber 
    req.session.data['benefitNumber'] = nextBenefitNumber
    res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/multiple-account/new-bankdetail-for-1')
  }
})


// confirmation page based on the due date within 6 days or not
router.post('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/confirmation', function (req, res) {

   // Make a variable and give it the value from 'how-many-balls'
   var paymentDue = req.session.data['payment-due-within-the-next-six-working-days']

   // Check whether the variable matches a condition
   if (paymentDue == "Yes") {
     res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/confirmation-2');
   }
   else {
     res.redirect('/V5-dynamic-prototype/Iteration4-with-returning-OIDV-journey/list-homepage/confirmation');
   }
 })

 //User who gets benefts prototype start here

// How did you find about this service
router.post('/V5/iteration-5/eligibility/test-eligibility-questions/how-did-customer-find-out-about-this-service', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['How-did-you-find-out-about-this-service']

  // Check whether the variable matches a condition
  if (findService == "Letter"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/what-does-customer-need-to-do');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/unhappy-path/can-not-use-this-service');
  }

})

// Who does the payment belong to?
router.post('/V5/iteration-5/eligibility/test-eligibility-questions/who-does-the-payment-belong-to', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['who-does-the-payment-belong-to']

  // Check whether the variable matches a condition
  if (findService == "Me"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/what-benefits-need-to-change');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/unhappy-path/someone-else');
  }

})

// Which benefits do you get?
router.post('/V5/iteration-5/eligibility/test-eligibility-questions/which-benefits-does-customer-get', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitsYouGet = req.session.data['Which-benefits-do-you-get']

  // Check whether the variable matches a condition
  if (benefitsYouGet == "I get a different benefit"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/unhappy-path/get-different-benefits');

  } else {
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/changing-the-account-we-pay-your-benefits-into');
}
})


// changing the account we pay your benefits into
router.post('/V5/iteration-5/eligibility/test-eligibility-questions/changing-the-account-we-pay-your-benefits-into', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['Is-your-new-account-also-based-in-the-UK']

  // Check whether the variable matches a condition
  if (findService == "Yes"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/are-you-expecting-a-payment');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/unhappy-path/non-UKBank-message');
  }

})

// Are you expecting a payment/voucher in the next 2 working days
router.post('/V5/iteration-5/eligibility/test-eligibility-questions/are-you-expecting-a-payment', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['expecting-payment-in-the-next-2-working-days']

  // Check whether the variable matches a condition
  if (findService == "No"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/you-can-use-this-service');

  } if (findService == "Yes"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/you-can-use-this-service-in-progress');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-questions/unhappy-path/contactUs');
  }

})

//User who gets benefts prototype end here



//User who gets benefts without (expecting payment/voucher page) prototype start here

// How did you find about this service
router.post('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/how-did-customer-find-out-about-this-service', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['How-did-you-find-out-about-this-service']

  // Check whether the variable matches a condition
  if (findService == "Letter"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/what-does-customer-need-to-do');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/unhappy-path/can-not-use-this-service');
  }

})

// Who does the payment belong to?
router.post('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/who-does-the-payment-belong-to', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['who-does-the-payment-belong-to']

  // Check whether the variable matches a condition
  if (findService == "Me"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/what-benefits-need-to-change');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/unhappy-path/someone-else');
  }

})

// Which benefits do you get?
router.post('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/which-benefits-does-customer-get', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var benefitsYouGet = req.session.data['Which-benefits-do-you-get']

  // Check whether the variable matches a condition
  if (benefitsYouGet == "I get a different benefit"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/unhappy-path/get-different-benefits');

  } else {
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/changing-the-account-we-pay-your-benefits-into');
}
})


// changing the account we pay your benefits into
router.post('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/changing-the-account-we-pay-your-benefits-into', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var findService = req.session.data['Is-your-new-account-also-based-in-the-UK']

  // Check whether the variable matches a condition
  if (findService == "Yes"){
    // Send user to next page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/you-can-use-this-service');

  } else {
    // Send on contact us page
    res.redirect('/V5/iteration-5/eligibility/test-eligibility-without-payment-due/unhappy-path/non-UKBank-message');
  }

})

//User who gets benefts without (expecting payment/voucher page) prototype end here
