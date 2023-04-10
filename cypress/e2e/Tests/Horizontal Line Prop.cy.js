function createOrRestoreSession() {
  const url =
    "https://cypresstestarnab1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MTAyNDY1MiwiZXhwIjoxNjgxMDI0OTUyfQ.8PsRorg7sIBx4Z02qm8nLS3LXRJG7CLSL6sajRfktaY";
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

describe("Horizontal Line All Property Set", () => {
  it("Horizontal Line All Property Set", () => {
    createOrRestoreSession();
    cy.visit(
      "https://cypresstestarnab1.dcms.site/dashboard/design/642e9a12752e13008daa7075"
    );
    cy.wait(30000);

    cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find('button:contains("+ Add New Section")').click();
    });

    cy.wait(100);
    cy.contains("li", "Custom Section").click();
    cy.wait(100);
    cy.get("div.ffrtKa").click();

    cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find('button:contains("+ Add Element")').click();
    });

    let elementText = "Horizontal Line";
    cy.contains("p", elementText).click();

    cy.contains("div", "Line Width & Height").within(() => {
      cy.get("input").eq(0).clear().type("4");
      cy.get("input").eq(1).clear().type("5");
    });
  });
});
