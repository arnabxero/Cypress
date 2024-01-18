describe("Arnab Test Test", () => {
    function CheckVisibilityInParent(parentElement, elementType, textContent) {
        if (parentElement) {
            cy.get(parentElement).should('be.visible')
                .within(() => {
                    cy.contains(elementType, textContent).should('be.visible');
                });
        } else {
            cy.contains(elementType, textContent).should('be.visible');
        }
    }

    it("passes", () => {
        cy.loginAndAPIMock();
        cy.visit("http://localhost:3000/builder/site/65a381e18bf0b5001ec555fa/page/65a381e18bf0b5001ec555fc");


        cy.get('[data-testid="elements"]').should('be.visible').click();
        CheckVisibilityInParent('[data-testid="drawer"]', 'strong', 'Add New Element');

        cy.get('[data-testid="components"]').should('be.visible').click();
        CheckVisibilityInParent('[data-testid="drawer"]', 'strong', 'Components');

        cy.get('[data-testid="pages"]').should('be.visible').click();
        CheckVisibilityInParent('[data-testid="drawer"]', 'strong', 'Pages');

        cy.get('[data-testid="GLOBAL-SETTINGS"]').should('be.visible').click();
        CheckVisibilityInParent(false, 'strong', 'Global Styles');

        cy.get('[data-testid="navigation"]').should('be.visible').click();
        CheckVisibilityInParent('[data-testid="drawer"]', 'strong', 'Layer Panel');

        cy.get('[data-testid="mediaLibrary"]').should('be.visible').click();
        CheckVisibilityInParent('[data-testid="drawer"]', 'strong', 'Assets');

        cy.get('[data-testid="SITE-SETTINGS"]').should('be.visible').click();
        CheckVisibilityInParent(false, 'strong', 'Site Settings & Integrations');

        // cy.get('[data-testid="language"]').should('be.visible').click();

        // cy.get('[data-testid="documentation"]').should('be.visible').click();

        // cy.get('[data-testid="back"]').should('be.visible').click();
    });
});
