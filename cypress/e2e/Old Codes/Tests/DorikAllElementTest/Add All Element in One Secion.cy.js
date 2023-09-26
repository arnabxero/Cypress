describe("Adding All Elements In A Single Section", () => {
    it("Adding all elements on a single section", () => {
      function commonAddButtonClick() {
          let buttonClassName_Production = "fzYRWN";
          let buttonClassName_Monorepo = "dPVNkg";

        cy.get("iframe#dorik-builder-iframe")
          .its("0.contentDocument.body")
          .find('section.dorik-section') 
          .trigger("mouseover")
          .find("button." + buttonClassName_Monorepo)
          .click();
      }
  
      function addElementByText(elementText) {
        cy.contains("p", elementText).click();
      }
  
      function initiateCypressParams(screenHeight, screenWidth) {
        cy.viewport(screenHeight, screenWidth);
      }
  
      function loginToSite(urlWithToken, loginDelay) {
        cy.visit(urlWithToken);
        cy.wait(loginDelay);
      }
  
      function gotoDesignPage(testPageDesignUrl, designPageLoadDelay) {
        cy.visit(testPageDesignUrl);
        cy.wait(designPageLoadDelay*2);
      }
  
      function addAllElements(elementAddDelay) {
        
        cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
          const $body = $iframe.contents().find("body");
          cy.wrap($body).find('button:contains("+ Add Element")').click();
        });
  
        const elementList = [
          "Accordion",
          "Contact Form",
          "Content Slider",
          "Countdown Timer",
          "Counter Circle",
          "Custom Code",
          "Custom Form",
          "Heading / Title",
          "Horizontal Line",
          "Icon",
          "Icon + Text",
          "Iframe",
          "Image",
          "Image Gallery",
          "Image Slider",
          "Links",
          "List",
        //   "Move To Top",
          "Navigation",
          "Payment Button",
          "Progress Bar",
          "Regular Button",
          "Social Icon",
          "Subscription Form",
          "Tabs",
          "Testimonial Slider",
          "Text",
          "Video",
        ];
        // 28 Elements
  
        for (let i = 0; i < elementList.length; i++) {
          cy.log((i+1)+". Adding Element: " + elementList[i]);
  
          addElementByText(elementList[i]);
          commonAddButtonClick();
        }
      }
  
      function TestFlow() {
        let screenHeight = 10000; // To Find the center of the section and hover mouse there
        let screenWidth = 1920;
  
        let loginDelay = 5000;
        let elementAddDelay = 2000;
        let designPageLoadDelay = 10000;
  
        let urlWithToken =
            "https://testdevbeforemerge.dorik.autos/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjEyM2VlNTMwOGYxNzg4MmM1ZGQxMTQzIiwiZW1haWwiOiJhcm5hYi5oYXhvckBnbWFpbC5jb20iLCJpYXQiOjE2ODAxNzExMjAsImV4cCI6MTY4MDE3MTQyMH0.CKqqgcGc-Mlj1Na4OEz2p7cuB8H6UW5W7bkh6VBaGH0";
        let testPageDesignUrl =
          "https://testdevbeforemerge.dorik.autos/dashboard/design/64255b1ed889da001ee73473";
  
        initiateCypressParams(screenWidth, screenHeight);
  
        loginToSite(urlWithToken, loginDelay);
  
        gotoDesignPage(testPageDesignUrl, designPageLoadDelay);
  
        addAllElements(elementAddDelay);
      }
  
      TestFlow();

      // Publish the page
      cy.get('button:contains("Publish")').click();

    });
  });
  