const express = require('express')
const router = express.Router()

// * ------------------------ Discovery Experiment One ------------------------

// Branching your-contact-channels
router.post('/discovery-experiments/e-one/your-contact-channels', function (req, res) {
      
    const contactChannel = req.session.data['contact-channel']
  
    if (contactChannel === 'telephone') {
      res.redirect('/discovery-experiments/e-one/telephone-information')
    }
  
    else if (contactChannel === 'dss-signin') {
      res.redirect('/discovery-experiments/e-one/benefit-summary')
    }
  
    else if (contactChannel === 'chat-bots') {
      res.redirect('/discovery-experiments/e-one/webchat-service')
    }
  
      else if (contactChannel === 'no-i-did-not-found-info') {
        res.redirect('/discovery-experiments/e-one/did-you-get-all-info-no')
      }
      else if (contactChannel === 'no-i-do-not') {
        res.redirect('/discovery-experiments/e-one/thank-you-close')
      }
  
})
  
//For assessment prototype
  
router.post('/discovery-experiments/e-one/contact-channels', function (req, res) {
  
    const contactChannel = req.session.data['contact']

    if (contactChannel === 'webchat') {
        res.redirect('/discovery-experiments/e-one/webchat-service')
    }

    else  {
        res.redirect('/discovery-experiments/e-one/thank-you')
    }
  
  
})


// * ------------------------ Discovery Experiment Two ------------------------
  

// Branching Information-channels
router.post('/discovery-experiments/e-two/information-channels', function (req, res) {
  
    const contactChannel = req.session.data['contact-channel']

    if (contactChannel === 'telephone') {
        res.redirect('/discovery-experiments/e-two/telephone-information')
    }

    else if (contactChannel === 'dss-signin') {
        res.redirect('/discovery-experiments/e-two/benefit-summary')
    }

    else if (contactChannel === 'chat-bots') {
        res.redirect('/discovery-experiments/e-two/webchat-service')
    }

        else if (contactChannel === 'no-i-did-not-found-info') {
        res.redirect('/discovery-experiments/e-two/did-you-get-all-info-no')
        }
        else if (contactChannel === 'no-i-do-not') {
        res.redirect('/discovery-experiments/e-two/thank-you-close')
        }
  
})

  
router.post('/discovery-experiments/e-two/contact-channels', function (req, res) {

    const contactChannel = req.session.data['contact']

    if (contactChannel === 'webchat') {
        res.redirect('/discovery-experiments/e-two/webchat-service')
    }

    else  {
        res.redirect('/discovery-experiments/e-two/thank-you')
    }


})

// * ------------------------ Discovery Experiment Three ------------------------

// Branching Experiement 3 Find-Information
router.post('/discovery-experiments/e-three/find-info', function (req, res) {


    const contactChannel = req.session.data['contact-channel']
  
    if (contactChannel === 'esa-service') {
      res.redirect('/discovery-experiments/e-three/digital-service/start')
    }
  
    else if (contactChannel === 'pip-service') {
      res.redirect('/discovery-experiments/e-three/digital-service-2/start')
    }
  
    else if (contactChannel === 'local-authority') {
      res.redirect('https://www.gov.uk/housing-benefit')
    }
  
    else if (contactChannel === 'adviser') {
        res.redirect('/discovery-experiments/e-three/telephone-information')
    }
    else if (contactChannel === 'dla-service') {
        res.redirect('/discovery-experiments/e-three/digital-service-3/start')
    }
    else if (contactChannel === 'govuk') {
      res.redirect('https://www.gov.uk/')
    }
  
})

  
// Branching Experiement 3 b1-Information
router.post('/discovery-experiments/e-three/b1-information', function (req, res) {
    
    const infoNeed = req.session.data['info-need']
  
    if (infoNeed === 'loe') {
      res.redirect('/discovery-experiments/e-three/digital-service/b1-loe')
    }
  
    else if (infoNeed === 'payment-info') {
      res.redirect('/discovery-experiments/e-three/digital-service/payments')
    }
  
    else if (infoNeed === 'status') {
      res.redirect('/discovery-experiments/e-three/digital-service/b1-status')
    }
  
    else if (infoNeed === 'adviser') {
        res.redirect('/discovery-experiments/e-three/digital-service/telephone-information')
    }
  
})
  

// Branching Experiement 3 b1-Information
router.post('/discovery-experiments/e-three/more-info-need', function (req, res) {
  
  
    const infoNeed = req.session.data['more-info-need']
  
    if (infoNeed === 'yes') {
      res.redirect('/discovery-experiments/e-three/digital-service/b1-information')
    }
  
    else if (infoNeed === 'no') {
      res.redirect('/discovery-experiments/e-three/digital-service/thank-you')
    }
  
  
})

  
// Branching Experiement 3 b2-info
router.post('/discovery-experiments/e-three/b2-info', function (req, res) {
  
  
    const infoNeed = req.session.data['search-channel']
  
    if (infoNeed === 'google') {
      res.redirect('https://google.com')
    }
  
    else if (infoNeed === 'govuk') {
      res.redirect('https://www.gov.uk/browse/benefits')
    }
    
})

  
// Branching Experiement 3 b2-Information
router.post('/discovery-experiments/e-three/b3-information', function (req, res) {

    const infoNeed = req.session.data['info-need']
  
    if (infoNeed === 'loe') {
      res.redirect('/discovery-experiments/e-three/digital-service/b3-loe')
    }
  
    else if (infoNeed === 'payment-info') {
      res.redirect('/discovery-experiments/e-three/digital-service/payments')
    }
  
    else if (infoNeed === 'status') {
      res.redirect('/discovery-experiments/e-three/digital-service/b3-status')
    }
  
    else if (infoNeed === 'adviser') {
        res.redirect('/discovery-experiments/e-three/digital-service/telephone-information')
    }
  
})
  
  
// Branching Experiement 3 b1-Information
router.post('/discovery-experiments/e-three/more-info-need-ca', function (req, res) {
  
    const infoNeed = req.session.data['more-info-need']
  
    if (infoNeed === 'yes') {
      res.redirect('/discovery-experiments/e-three/digital-service-3/b3-information')
    }
  
    else if (infoNeed === 'no') {
      res.redirect('/discovery-experiments/e-three/digital-service-3/thank-you')
    }
  
})
  
  
// Branching Experiement 3 V2 Information-channels
router.post('/discovery-experiments/e-three/information-channels', function (req, res) {

    const contactChannel = req.session.data['contact-channel']
  
    if (contactChannel === 'telephone') {
      res.redirect('/discovery-experiments/e-three/concept-2/telephone-information')
    }
  
    else if (contactChannel === 'dss-signin') {
      res.redirect('/discovery-experiments/e-three/concept-2/ni-number')
    }
  
    else if (contactChannel === 'chat-bots') {
      res.redirect('/discovery-experiments/e-three/concept-2/webchat-service')
    }
  
      else if (contactChannel === 'no-i-did-not-found-info') {
        res.redirect('/discovery-experiments/e-three/concept-2/did-you-get-all-info-no')
      }
      else if (contactChannel === 'no-i-do-not') {
        res.redirect('/discovery-experiments/e-three/concept-2/thank-you-close')
      }
  
})
  
  
router.post('/discovery-experiments/e-three/contact-channels', function (req, res) {

    const contactChannel = req.session.data['contact']
  
    if (contactChannel === 'webchat') {
      res.redirect('/discovery-experiments/e-three/concept-2/webchat-service')
    }
  
    else  {
      res.redirect('/discovery-experiments/e-three/concept-2/thank-you')
    }
  
  
})


// * ------------------------ Discovery Experiment Four ------------------------

// Branching Experiement 4 V2 Information-channels
router.post('/discovery-experiments/e-four/information-channels', function (req, res) {

    const contactChannel = req.session.data['contact-channel']
  
    if (contactChannel === 'telephone') {
      res.redirect('/discovery-experiments/e-four/concept-2/telephone-information')
    }
  
    else if (contactChannel === 'dss-signin') {
      res.redirect('/discovery-experiments/e-four/concept-2/ni-number')
    }
  
    else if (contactChannel === 'chat-bots') {
      res.redirect('/discovery-experiments/e-four/concept-2/webchat-service')
    }
  
      else if (contactChannel === 'no-i-did-not-found-info') {
        res.redirect('/discovery-experiments/e-four/concept-2/did-you-get-all-info-no')
      }
      else if (contactChannel === 'no-i-do-not') {
        res.redirect('/discovery-experiments/e-four/concept-2/thank-you-close')
      }
  
})
  
  
router.post('/discovery-experiments/e-four/concepts', function (req, res) {

    const contactChannel = req.session.data['concepts']
  
    if (contactChannel === 'concept-1') {
      res.redirect('/discovery-experiments/e-four/your-benefit-information')
    }
  
    else  {
      res.redirect('/discovery-experiments/e-four/concept-2/start')
    }
  
  
})

// * ------------------------ Discovery Experiment Five ------------------------

router.post('/discovery-experiments/e-five/concepts', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const contactChannel = req.session.data['concepts']
  
    if (contactChannel === 'concept-1') {
      res.redirect('/discovery-experiments/e-five/your-benefit-information')
    }
  
    else  {
      res.redirect('/discovery-experiments/e-five/concept-2/start')
    }
  
  
  })
  
router.post('/discovery-experiments/e-five/information-channels', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const contactChannel = req.session.data['contact-channel']
  
    if (contactChannel === 'telephone') {
      res.redirect('/discovery-experiments/e-five/concept-2/telephone-information')
    }
  
    else if (contactChannel === 'dss-signin') {
      res.redirect('/discovery-experiments/e-five/concept-2/ni-number')
    }
  
    else if (contactChannel === 'chat-bots') {
      res.redirect('/discovery-experiments/e-five/concept-2/webchat-service')
    }
  
      else if (contactChannel === 'no-i-did-not-found-info') {
        res.redirect('/discovery-experiments/e-five/concept-2/did-you-get-all-info-no')
      }
      else if (contactChannel === 'no-i-do-not') {
        res.redirect('/discovery-experiments/e-five/concept-2/thank-you-close')
      }
  
})

module.exports = router ;