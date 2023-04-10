function createOrRestoreSession() {
  const url =
    "https://cypresstestarnab1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MDc2Njg4MCwiZXhwIjoxNjgwNzY3MTgwfQ.iAqHjhaGK9nWNuYbEk3LqvgFHsR0sVrheBIPwetJXJc";
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

function generateRandomString(size) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < size; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function createANewPost(delayTime) {
  let returnObject = {
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: [],
    canonicalURL: "",
    meta_twitter_title: "",
    meta_twitter_description: "",
    meta_opengraph_title: "",
    meta_opengraph_description: "",
  };

  cy.visit("https://cypresstestarnab1.dcms.site/dashboard/");
  cy.wait(5000);
  cy.get('a[href="/dashboard/posts"]').click();
  cy.wait(delayTime);
  cy.get('a[href="/dashboard/post/create-new"]').click();
  cy.wait(delayTime);

  returnObject.title = generateRandomString(25);
  cy.get("h1.blog--post__title").click().type(returnObject.title);
  cy.wait(delayTime);

  returnObject.content = generateRandomString(300);
  cy.get("div.ce-paragraph.cdx-block").click().type(returnObject.content);
  cy.wait(delayTime);

  cy.get("").click();
  cy.wait(5000);

  returnObject.slug = generateRandomString(10);
  cy.get("#slug").type(returnObject.slug);
  cy.wait(delayTime);

  returnObject.excerpt = generateRandomString(100);
  cy.get("textarea#excerpt").type(returnObject.excerpt);
  cy.wait(delayTime);

  returnObject.meta_title = generateRandomString(10);
  cy.get("#meta_title").type(returnObject.meta_title);
  cy.wait(delayTime);

  returnObject.meta_description = generateRandomString(100);
  cy.get("#meta_description").type(returnObject.meta_description);
  cy.wait(delayTime);

  for (let i = 0; i < 5; i++) {
    let keywordGen = generateRandomString(5);
    cy.get("#meta_keywords")
      .click()
      .type(keywordGen + "{enter}");
    cy.wait(delayTime);
    returnObject.meta_keywords.push(keywordGen);
  }

  returnObject.canonicalURL = "https://www." + generateRandomString(7) + ".com";
  cy.get("#canonicalURL").type(returnObject.canonicalURL);
  cy.wait(delayTime);

  cy.contains("Twitter Card").click();

  // Twitter Card
  returnObject.meta_twitter_title = generateRandomString(10);
  cy.get("#meta_twitter_title").clear().type(returnObject.meta_twitter_title);
  cy.wait(delayTime);
}

describe("Adding All Elements To A Single Section", () => {
  it("Add All Elements", () => {
    // Initated cypress browser screen size [Long screen bacause of mouseover focus problem]
    // initiateCypressParams(1920, 1080);

    // Login and save session, if not already saved
    createOrRestoreSession();

    createANewPost(1000);
  });
});
