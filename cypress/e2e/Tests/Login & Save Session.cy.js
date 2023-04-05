function createOrRestoreSession() {
  const url =
    "https://cypresstestarnab1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MDY3OTM5NywiZXhwIjoxNjgwNjc5Njk3fQ.QwNgGsBWYqm1N1lUVnWuiewOU6aOZ_6a7Tr_-mKXXac";

  const sessionKey = "user";

  cy.session(
    sessionKey,
    () => {
      cy.visit(url);
      cy.wait(10000);
      cy.url().should("contain", "/dashboard");
    },
    {
      cacheAcrossSpecs: true,
    }
  );
}

function initiateCypressParams(screenHeight, screenWidth) {
  cy.viewport(screenHeight, screenWidth);
}

function commonAddButtonClick() {
  let buttonClassName_Production = "fzYRWN";
  let buttonClassName_Monorepo = "dPVNkg";

  cy.get("iframe#dorik-builder-iframe")
    .its("0.contentDocument.body")
    .find("section.dorik-section")
    .trigger("mouseover")
    .find("button." + buttonClassName_Production)
    .click();
}

function addElementByText(elementText) {
  cy.contains("p", elementText).click();
}

function addAllElements(elementAddDelay) {
  cy.visit(
    "https://cypresstestarnab1.dcms.site/dashboard/design/64240d4c87f9cf00128cf606"
  );
  cy.wait(10000);

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
    "Move To Top",
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
    cy.log(i + 1 + ". Adding Element: " + elementList[i]);

    addElementByText(elementList[i]);
    commonAddButtonClick();
  }
}

describe("Auto Login Test", () => {
//   it("Auto Login Test", () => {
//     initiateCypressParams(1920, 1080);
//     createOrRestoreSession();

//     cy.visit(
//       "https://deletetempsite1.dcms.site/dashboard/design/642becbd752e13008da5c289"
//     );
//     cy.wait(10000);
//   });

  it("Add All Elements", () => {
    initiateCypressParams(1920, 10000);
    createOrRestoreSession();

    addAllElements(100);
  });
});
