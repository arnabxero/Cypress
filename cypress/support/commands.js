Cypress.Commands.add('loginAndAPIMock', () => {
    cy.intercept("POST", "https://api.dorik.dev/graphql", (req) => {
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
    }).as("apiMock");

    cy.session("login", () => {
        cy.visit("http://localhost:3000/login");
        cy.get('input[name="email"]').type("cegiy54303@anawalls.com");
        cy.get('input[name="password"]').type("cegiy54303@anawalls.comA", {
            sensitive: true,
        });
        cy.wait(2000);
        cy.get('[type="submit"]').click();
        cy.wait("@apiMock");
        cy.wait(4000);
        cy.contains("CMS");
    });
});
