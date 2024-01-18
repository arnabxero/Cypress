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

        cy.get('[data-testid="elements"]').should('be.visible');
        cy.get('[data-testid="components"]').should('be.visible');
        cy.get('[data-testid="pages"]').should('be.visible');
        cy.get('[data-testid="GLOBAL-SETTINGS"]').should('be.visible');
        cy.get('[data-testid="navigation"]').should('be.visible');
        cy.get('[data-testid="mediaLibrary"]').should('be.visible');

        cy.get('[data-testid="language"]').should('be.visible');

        cy.get('[data-testid="documentation"]').should('be.visible');

        cy.get('[data-testid="back"]').should('be.visible');

    });
});
