function createOrRestoreSession() {
  const url =
    "https://cypresstestarnab1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MTEyMDA1MCwiZXhwIjoxNjgxMTIwMzUwfQ.UjN3oFGkfkvjlMJAqxOX890d7kp2XMRpFSwoageY3cE";
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

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

describe("Horizontal Line All Property Set", () => {
  it("Horizontal Line All Property Set", () => {
    createOrRestoreSession();

    // Visit Design Page
    cy.visit("https://cypresstestarnab1.dcms.site/dashboard/design/");
    cy.wait(20000);

    cy.get("iframe#dorik-builder-iframe")
      .its("0.contentDocument.body")

      .find("section.dorik-section")
      .last()
      .within(() => {
        cy.get("div[class*=dorik-row]")
          .first()
          .within(() => {
            cy.get("div[class*=dorik-column]")
              .first()
              .trigger("mouseover")
              .within(() => {
                cy.get(".fzYRWN:first").click();
              });
          });
      });

    cy.contains("p", "Horizontal Line").click();

    let props = {
      height: "400px",
      width: "10px",
      alignment: "1",
      color: "#0013FF",
      margin_padding: "10px",
      border_width: "10px",
      border_radius: "50px",
      shadow: {
        offset_horizontal: "40px",
        offset_vertical: "40px",
        blur_radius: "40px",
        spread_radius: "40px",
      },
    };

    cy.get("div[class*=gCTDZn]")
      .first()
      .within(() => {
        cy.get("input").eq(1).clear().type(props.height);
        cy.get("input").eq(3).clear().type(props.width);

        cy.get("ul[class*=jMbHIh]")
          .first()
          .within(() => {
            cy.get("li").eq(props.alignment).click();
          });

        cy.contains("div", "Line Background").click();

        cy.get("div[class*=gEBljE]")
          .first()
          .within(() => {
            cy.get("input").wait(100).clear().type("{selectall}blue");
          });

        cy.get("ul[class*=kgEJQT]")
          .first()
          .within(() => {
            cy.get("li").eq(1).click();
          });

        cy.get("div[class*=kHsEWn]")
          .first()
          .within(() => {
            for (let i = 0; i < 8; i++) {
              cy.get("input").eq(i).clear().type(props.margin_padding);
            }
          });

        // cy.contains("div", "Border").click();

        cy.get("div[class*=fWXWJY]")
          .eq(1)
          .within(() => {
            cy.get("input").eq(1).clear().type(props.border_width);
            cy.get("select").first().select("Dashed");
            cy.get("input").eq(2).wait(100).clear().type("{selectall}red");
          });

        cy.get('div[class*="kHsEWn"]')
          .eq(2)
          .click()
          .within(() => {
            cy.get("input").eq(0).clear().type(props.border_radius);
            cy.get("input").eq(1).clear().type(props.border_radius);
            cy.get("input").eq(2).clear().type(props.border_radius);
            cy.get("input").eq(3).clear().type(props.border_radius);
          });

        cy.get('div[class*="kHsEWn"]')
          .eq(3)
          .click()
          .within(() => {
            cy.get("ul[class*=jMbHIh]")
              .first()
              .within(() => {
                cy.get("li").eq(1).click();
              });
            cy.get("input").eq(1).clear().type(props.shadow.offset_horizontal);
            cy.get("input").eq(3).clear().type(props.shadow.offset_vertical);
            cy.get("input").eq(5).clear().type(props.shadow.blur_radius);
            cy.get("input").eq(7).clear().type(props.shadow.spread_radius);
            cy.get("input").eq(8).wait(100).clear().type("{selectall}green");
          });
      });
  });
});
