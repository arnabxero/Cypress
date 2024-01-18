describe("empty spec", () => {
    it("passes", () => {
        cy.intercept("POST", "https://api.dorik.dev/graphql", (req) => {
            // if (requestBody.includes("login")) {
            const requestBody = req.body;
            const queryNameMatch = requestBody.query.match(/query\s+(\w+)/);
            const queryName = queryNameMatch ? queryNameMatch[1] : null;
            const mutationNameMatch = requestBody.query.match(/mutation\s+(\w+)/);
            const mutationName = mutationNameMatch ? mutationNameMatch[1] : null;
            if (queryName === "login") {
                req.reply({
                    fixture: "loginMock.json",
                    statusCode: 200,
                });
            } else if (mutationName === "refreshToken") {
                req.reply({
                    fixture: "refreshTok.json",
                    statusCode: 200,
                });
            } else if (queryName === "site") {
                req.reply({
                    fixture: "siteMock.json",
                    statusCode: 200,
                });
            } else if (queryName === "page") {
                req.reply({
                    fixture: "pageData.json",
                    statusCode: 200,
                });
            } else {
                req.continue();
            }
            // } else {
            //   req.continue();
            // }
        }).as("profilemock");

        cy.viewport(1440, 800);
        cy.session("login", () => {
            cy.visit("http://localhost:3000/login");
            cy.get('input[name="email"]').type("cegiy54303@anawalls.com");
            cy.get('input[name="password"]').type("cegiy54303@anawalls.comA", {
                sensitive: true,
            });
            cy.wait(2000);
            cy.get('[type="submit"]').click();
            cy.wait("@profilemock");
            // cy.get('[type="circle"]').click();
            cy.wait(4000);
            cy.contains("CMS");
        });

        cy.visit(
            "http://localhost:3000/builder/site/65a381e18bf0b5001ec555fa/page/65a381e18bf0b5001ec555fc"
        );

        cy.wait("@profilemock");


        cy.get("#dorik-builder-iframe", { timeout: 10_000 }).should("be.visible");
        cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist");

        cy.get("#dorik-builder-iframe")
            .its("0.contentDocument")
            .within(($body) => {
                cy.get('.dorik-section').first().trigger('mouseover');
                cy.get('div[class*="dorik-ec"]').eq(1).click();
            });

        cy.get('div[data-testid="empty-block-0"]').click()

        cy.get("#dorik-builder-iframe")
            .its("0.contentDocument")
            .within(($body) => {
                cy.get('button[class*="ant-btn-circle"]').eq(0).click();
            });

        cy.get('div[data-node-key="containers"]').click()
        cy.get('div[data-testid="empty-block-0"]').click()
    });
});
