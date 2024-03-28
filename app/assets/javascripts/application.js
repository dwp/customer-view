//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  
        
  var researchSetUpBenefits = req.session.data['researchSetUpBenefits']

  if (researchSetUpBenefits.length > 1)  {
  // Send user to next page
  document.getElementById("multiWeek").style.display = "block";

  } else {
  // Send to single benefit page
  document.getElementById("singleWeek").style.display = "block";
  }

})
