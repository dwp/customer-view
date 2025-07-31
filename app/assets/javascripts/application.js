//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// cookies mocked behaviour


const cookiesConsent = () => {

  const cookieBanner = document.querySelector(".govuk-cookie-banner"),
    cookieBannerButtonAccept = document.querySelector(".js-cookie-banner-button--accept"),
    cookieBannerButtonReject = document.querySelector(".js-cookie-banner-button--reject"),
    cookieBannerMessage = document.querySelector(".js-cookie-banner-message"),
    cookieBannerMessageAccepted = document.querySelector(".js-cookie-banner-message--accepted"),
    cookieBannerMessageRejected = document.querySelector(".js-cookie-banner-message--rejected");

    const cookieBannerHide = (hideButton)  => {

        const cookieBannerButtonHide = document.querySelector("[name='cookies[hide]']");

        console.dir(cookieBannerButtonHide);

        hideButton.addEventListener(
          "click",
          function (event) {
            event.preventDefault();
            cookieBanner.hidden = true;
          }
        );
    }

    const showCookieConfirmationAccept = () => {

      return function (event) {
        event.preventDefault();
        cookieBannerMessage.hidden = true;
        cookieBannerMessageAccepted.hidden = false;
        const cookieBannerMessageAcceptedHide = document.querySelector(".js-cookie-banner-button--accepted-hide");
        cookieBannerHide(cookieBannerMessageAcceptedHide);
      };
    }

    const showCookieConfirmationReject = () => {

      return function (event) {
        event.preventDefault();
        cookieBannerMessage.hidden = true;
        cookieBannerMessageRejected.hidden = false;
        const cookieBannerMessageRejectedHide = document.querySelector(".js-cookie-banner-button--rejected-hide");
        cookieBannerHide(cookieBannerMessageRejectedHide);
      };
    }

    if (cookieBanner != null) {
      cookieBannerButtonAccept.addEventListener(
        "click",
        showCookieConfirmationAccept()
      );
      cookieBannerButtonReject.addEventListener(
        "click",
        showCookieConfirmationReject()
      );
    }
};

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  cookiesConsent();
})
