function createOrRestoreSession() {
  const url =
    "https://cypresstestarnab2.agency.dorik.dev/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjEyM2VlNTMwOGYxNzg4MmM1ZGQxMTQzIiwiZW1haWwiOiJhcm5hYi5kb3Jpa0BnbWFpbC5jb20iLCJpYXQiOjE2ODQzMDUwMzMsImV4cCI6MTY4NDMwNTMzM30.9ZGXJZasWQKndtrAh_ZouHhCEQ6LHmuyoJAVBDwGO-k";
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
  let buttonClassName_Development = "fzYRWN";

  cy.get("iframe#dorik-builder-iframe")
    .then(($iframe) => {
      const iframeWindow = $iframe.contents()[0].defaultView;
      iframeWindow.scrollTo(0, iframeWindow.document.body.scrollHeight);
    })
    .its("0.contentDocument.body")
    .find("section.dorik-section")
    .trigger("mouseover")
    .find("button." + buttonClassName_Development)
    .click();
}

function addElementByText(elementText) {
  if (elementText == "Text") {
    cy.get("svg.fa-align-left").click();
  } else {
    cy.contains("p", elementText).click();
  }
}

function addOneEmptySection() {
  cy.visit("https://cypresstestarnab2.agency.dorik.dev/dashboard/design");
  cy.wait(20000);

  cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
    const $body = $iframe.contents().find("body");
    try {
      cy.wrap($body).find('button:contains("+ Add New Section")').click();
    } catch {
      cy.log("Section already added");
    }
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
