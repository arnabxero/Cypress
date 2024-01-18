describe("Arnab Test Test", () => {
    it("passes", () => {
        cy.loginAndAPIMock();

        cy.visit("http://localhost:3000/builder/site/65a381e18bf0b5001ec555fa/page/65a381e18bf0b5001ec555fc");

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
