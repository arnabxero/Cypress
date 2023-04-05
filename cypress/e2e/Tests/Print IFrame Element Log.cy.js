describe("Login", () => {
    it("Logs in successfully", () => {
      function generateRandomString(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
  
      function initiateCypressParams(screenHeight, screenWidth) {
        cy.viewport(screenHeight, screenWidth);
      }
  
      function loginToSiteWithToken(siteURL, token) {
        let URL = token;
        cy.visit(URL);
        cy.wait(10000);
      }
  
      function addAllElements(waitTime) {
        cy.wait(waitTime);
        cy.visit(
            "https://testdevbeforemerge.dorik.autos/dashboard/design/64255b1ed889da001ee73473"
        );
  
        cy.wait(20000);
  
        cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
          const $body = $iframe.contents().find("body");
          cy.wrap($body).find('button:contains("+ Add Element")').click();
        });
  
        cy.wait(500);
  
        cy.contains("p", "Accordion").click();
  
        cy.wait(500);
  
        // cy.get('iframe.dorik-builder-iframe')
        // .its('0.contentDocument.body')
        // .find('div.sc-csuSiG.gQafrc button')
        // .click()
  
        // cy.get('iframe#dorik-builder-iframe')
        // .its('0.contentDocument.body')
        // .find('div.sc-idXgbr[itemtype="column"]')
        // .trigger('mouseover')
  
        cy.get("iframe#dorik-builder-iframe")
          .its("0.contentDocument.body")
          .find('div.sc-fnGiBr[itemtype="column"]')
          .trigger("mouseover")
          .then(($div) => {
            const html = $div.html();
            cy.log(html);
          });
         // sc-fnGiBr hzKZtm col-lg-1/1 element-wrapper dorik-column-oa7ox4qv-wrapper
        // cy.get("#dorik-builder-iframe")
        //   .trigger("mouseover")
        //   .then(($iframe) => {
        //     const $body = $iframe.contents().find("body");
  
        //     cy.wrap($body)
        //       .find("*")
        //       .then(($elements) => {
        //         console.log($elements);
        //         const html = $elements.html();
        //         cy.log(html);
        //       });
        //   });
  
        // cy.get("iframe#dorik-builder-iframe")
        //   .its("0.contentDocument.body")
        //   .find('div.sc-idXgbr[itemtype="column"]')
        //   .trigger("mouseover")
        //   .find(
        //     "button.dorik-element-control__action-btn svg.svg-inline--fa.fa-plus"
        //   )
        //   .click();
  
        // cy.get("iframe#dorik-builder-iframe")
        //   .its("0.contentDocument.body")
        //   .find('div.sc-idXgbr[itemtype="column"]')
        //   .trigger("mouseover")
        //   .find("button.fzYRWN")
        //   .click();
  
        // cy.contains("p", "Contact Form").click();
  
        // cy.get("iframe#dorik-builder-iframe")
        //   .its("0.contentDocument.body")
        //   .find('div.sc-idXgbr[itemtype="column"]')
        //   .trigger("mouseover")
        //   .find("button.fzYRWN")
        //   .click();
  
        // cy.contains("p", "Content Slider").click();
  
        // cy.get("iframe#dorik-builder-iframe")
        //   .its("0.contentDocument.body")
        //   .find('div.sc-idXgbr[itemtype="column"]')
        //   .trigger("mouseover")
        //   .find("button.fzYRWN")
        //   .click();
  
        // cy.contains("p", "Contact Form").click();
  
        // cy.get("iframe#dorik-builder-iframe")
        //   .its("0.contentDocument.body")
        //   .find('div.sc-idXgbr[itemtype="column"]')
        //   .trigger("mouseover")
        //   .find("button.fzYRWN")
        //   .click();
  
        // cy.contains("p", "Contact Form").click();
  
        // cy.wait(500);
      }
  
      const authToken =
        "https://testdevbeforemerge.dorik.autos/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjEyM2VlNTMwOGYxNzg4MmM1ZGQxMTQzIiwiZW1haWwiOiJhcm5hYi5oYXhvckBnbWFpbC5jb20iLCJpYXQiOjE2ODAxNjk5OTcsImV4cCI6MTY4MDE3MDI5N30.eVFY4rXF1smT-lg4I43IhAybfoa5hY2ZoqgMLlO-edU";
      function TestFlow() {
        initiateCypressParams(1920, 1080);
  
        loginToSiteWithToken("https://cypresstestarnab1.dcms.site", authToken);
  
        addAllElements(2000);
      }
  
      TestFlow();
    });
  });
  