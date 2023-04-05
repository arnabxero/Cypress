function createOrRestoreSession() {
  const url =
    "https://cypresstestarnab1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MDY4MDQ3MCwiZXhwIjoxNjgwNjgwNzcwfQ.TvhBOBCuBMlY-dks7FHrZNohtjE8thTfkcXYlT940CA";
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
  if (elementText == "Text") {
    cy.get('svg.fa-align-left').click();
     
  } else {
    cy.contains("p", elementText).click();
  }
}

function addOneEmptySection() {
  cy.visit(
    "https://cypresstestarnab1.dcms.site/dashboard/design/64240d4c87f9cf00128cf606"
  );
  cy.wait(20000);

  cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
    const $body = $iframe.contents().find("body");
    cy.wrap($body).find('button:contains("+ Add New Section")').click();
  });

  cy.wait(100);
  cy.contains("li", "Custom Section").click();
  cy.wait(100);
  cy.get("div.ffrtKa").click();
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

function publishTheSite() {
  cy.log("Publishig The Site");
  // Publish the page
  cy.get('button:contains("Publish")').click();
}

describe("Adding All Elements To A Single Section", () => {
  it("Add All Elements", () => {
    // Initated cypress browser screen size [Long screen bacause of mouseover focus problem]
    initiateCypressParams(1920, 5000);

    // Login and save session, if not already saved
    createOrRestoreSession();

    // Add one empty section
    addOneEmptySection();

    // Add all elements to a single section
    addAllElements(100);

    // Publish the site
    publishTheSite();
  });
});
