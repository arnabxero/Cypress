describe("Check All Elements Visible or Not", () => {
    it("Checking....", () => {
      function checkDivClassNameContainsWord(word) {
        try {
          cy.get(`[class*=${word}]`);
          return true;
        } catch (error) {
          return false;
        }
      }
  
      function initiateCypressParams(screenHeight, screenWidth) {
        cy.viewport(screenHeight, screenWidth);
      }
  
      function visitPage(URL) {
        cy.visit(URL);
        cy.wait(5000);
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
          "dorik-counterdown",
          "dorik-counterCircle",
          "dorik-code",
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
          let result = checkDivClassNameContainsWord(elementClassName);
  
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
        }
      }
  
      TestFlow();
    });
  });
  