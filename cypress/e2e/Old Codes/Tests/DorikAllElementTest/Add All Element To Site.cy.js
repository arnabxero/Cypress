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
        "https://cypresstestarnab1.dcms.site/dashboard/design/64240d4c87f9cf00128cf606"
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

      // cy.get("iframe#dorik-builder-iframe")
      //   .its("0.contentDocument.body")
      //   .find('div.sc-idXgbr[itemtype="column"]')
      //   .trigger("mouseover")
      //   .then(($div) => {
      //     const html = $div.html();
      //     cy.log(html);
      //   });

      cy.get("#dorik-builder-iframe")
        .trigger("mouseover")
        .then(($iframe) => {
          const $body = $iframe.contents().find("body");

          cy.wrap($body)
            .find("*")
            .then(($elements) => {
              console.log($elements);
              const html = $elements.html();
              cy.log(html);
            });
        });

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
      "https://cypresstestarnab1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MDE2MTY2MywiZXhwIjoxNjgwMTYxOTYzfQ.aE-8M6DNnyZ1UrI_ylReWmb7OornHutUKbA03fBqhjQ";
    function TestFlow() {
      initiateCypressParams(1920, 1080);

      loginToSiteWithToken("https://cypresstestarnab1.dcms.site", authToken);

      addAllElements(2000);
    }

    TestFlow();
  });
});
