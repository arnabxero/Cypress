function createOrRestoreSession() {
  const url =
    "http://multisinglee2e.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYi5kb3Jpa0BnbWFpbC5jb20iLCJpYXQiOjE2OTM0NzM4NDUsImV4cCI6MTY5MzQ3NDE0NX0.gSevnnRbFRHj0wYy0vE9RFEOnO-Z41OwgcwPqfKrO8s";






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

function printDorikIframe() {
  cy.get("iframe#dorik-builder-iframe")
    .its("0.contentDocument.body")
    .find('div.sc-idXgbr[itemtype="column"]')
    .eq(0)
    .trigger("mouseover")
    .then(($div) => {
      const html = $div.html();
      cy.log(html);
    });
}

describe("Login", () => {
  it("Logs in successfully", () => {

    createOrRestoreSession();

    cy.visit("http://multisinglee2e.dcms.site/dashboard/design");
    cy.wait(40000);

    printDorikIframe();
  });
});
