describe("Subscription Form Submission Test", () => {
  it("Subscription form submission", () => {
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;

    cy.intercept(
      "POST",
      "https://41f5pv771f.execute-api.us-east-2.amazonaws.com/Prod/create-contact"
    ).as("SubscriptionForm");

    cy.visit("https://cypresstestarnab1.dcms.site/form-test");
    cy.wait(2000);
    cy.get('form[class^="dorik-subscription"]').within(() => {
      cy.get('input[name="email"]').type(randomEmail);
      cy.get('button[type="submit"]').click();
    });

    cy.wait("@SubscriptionForm")
      .its("response.body")
      .then((responseBody) => {
        cy.log(responseBody);
      });
    cy.get('form[class^="dorik-subscription"]').within(() => {
      cy.get("div.success-message").should("exist");
    });
  });
});

describe("Contact Form Submission Test", () => {
  it("Contact form submission", () => {
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;

    const randomSubject =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const randomMessage = Math.random().toString(36).substring(2, 15);

    cy.intercept(
      "POST",
      "https://cypresstestarnab1.dcms.site/api/action/contact"
    ).as("ContactForm");

    cy.visit("https://cypresstestarnab1.dcms.site/form-test");
    cy.wait(2000);
    cy.get('form[class^="dorik-contactForm"]').within(() => {
      cy.get('input[name="email"]').type(randomEmail);
      cy.get('input[name="subject"]').type(randomSubject);
      cy.get('textarea[name="message"]').type(randomMessage);
      cy.get('button[type="submit"]').click();
    });

    cy.wait("@ContactForm")
      .its("response.body")
      .then((responseBody) => {
        cy.log(responseBody);
      });
    cy.get('form[class^="dorik-contactForm"]').within(() => {
      cy.get("div.success-message").should("exist");
    });
  });
});

describe("Custom Form Submission Test", () => {
  it("Custom form submission", () => {
    //     const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
    //     const randomSubject =
    //       Math.random().toString(36).substring(2, 15) +
    //       Math.random().toString(36).substring(2, 15);
    //     function randomString(len) {
    //       var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //       var randomString = "";
    //       for (var i = 0; i < len; i++) {
    //         var randomPoz = Math.floor(Math.random() * charSet.length);
    //         randomString += charSet.substring(randomPoz, randomPoz + 1);
    //       }
    //       return randomString;
    //     }
    //     cy.intercept(
    //       "POST",
    //       "https://cypresstestarnab1.dcms.site/api/action/contact"
    //     ).as("CustomForm");
    //     cy.visit("https://cypresstestarnab1.dcms.site/form-test");
    //     cy.wait(2000);
    // cy.get('div[class*=dorik-customForm]')
    //       cy.get('input[name="FirstName"]').type(randomString(10));
    //       //   cy.get('input[name="LastName"]').type(randomString(10));
    //       //   cy.get('input[name="Time"]').type("11111");
    //       //   cy.get('input[name="subject"]').type(randomSubject);
    //       //   cy.get('textarea[name="message"]').type(randomMessage);
    //       cy.get('button[type="submit"]').click();
    //     });
    //     cy.wait("@CustomForm")
    //       .its("response.body")
    //       .then((responseBody) => {
    //         cy.log(responseBody);
    //       });
    //     cy.get('form[class^="dorik-contactForm"]').within(() => {
    //       cy.get("div.success-message").should("exist");
    //     });
  });
});
