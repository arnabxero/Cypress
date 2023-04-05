describe("Login", () => {
  it("Logs in successfully", () => {
    function checkDivClassNameContainsWord(word) {
      cy.get(`div[class*=${word}]`).then(($div) => {
        if ($div.length > 0) {
          const className = $div.attr("class");
          return className.includes(word);
        } else {
          return false;
        }
      });
    }

    function initiateCypressParams(screenHeight, screenWidth) {
      cy.viewport(screenHeight, screenWidth);
    }

    function TestFlow() {
      let screenHeight = 1080;
      let screenWidth = 1920;

      let URL = "https://cypresstestarnab1.dcms.site/rsfgwrtwr";

      initiateCypressParams(screenWidth, screenHeight);

      visitPage(URL);

      const ElementsClassNames = [
        "dorik-accordion",
        "dorik-contactForm",
        "dorik-contentSlider",
        "dorik-countdownTimer",
        "dorik-counterCircle",
        "dorik-customCode",
        "dorik-customForm",
        "dorik-heading",
        "dorik-line",
        "dorik-icon",
        "dorik-iconText",
        "dorik-iframe",
        "dorik-image",
        "dorik-imageGallery",
        "dorik-imageSlider",
        "dorik-links",
        "dorik-lists",
        "dorik-moveToTop",
        "dorik-nav",
        "dorik-paymentWidgets",
        "dorik-progressbar",
        "dorik-button",
        "dorik-socialIcon",
        "dorik-subscription",
        "dorik-tabs",
        "dorik-testimonialSlider",
        "dorik-text",
        "dorik-video",
      ];

      for (let i = 0; i < ElementsClassNames.length; i++) {
        const elementClassName = ElementsClassNames[i];
        checkDivClassNameContainsWord("partial").then((result) => {
          if (result) {
            cy.log(1 + i + ". " + elementClassName + " is present");
          } else {
            cy.log(
              1 +
                i +
                ". " +
                elementClassName +
                " NOT FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
            );
          }
        });
      }
    }

    TestFlow();
  });
});
