
describe('Intercept and Print Network POST Request', () => {
    it('should intercept a specific POST request and print its response', () => {

        var responseObject = null;

        cy.intercept('POST', 'https://multisinglee2e.dcms.site/api/cms/topics/by-slug/Recipes-Book/items', (req) => {
        }).as('interceptedRequest');

        cy.visit('https://multisinglee2e.dcms.site/Recipes-Book/Recipes-Book-2');

        cy.wait('@interceptedRequest', { timeout: 10000 }).then((interception) => {
            cy.log('Response:', interception.response.body);

            const responseBody = interception.response.body;
            cy.log(responseBody.data[0].Multi_Recipes[0]._topicSlug);

            ///// check the link element urls and match the first part with the _topicSlug
        });

    });
});
