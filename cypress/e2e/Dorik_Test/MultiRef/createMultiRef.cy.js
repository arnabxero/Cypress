function createOrRestoreSession() {
    const url =
        "https://multisinglee2e.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYi5kb3Jpa0BnbWFpbC5jb20iLCJpYXQiOjE2OTM0ODE0MzYsImV4cCI6MTY5MzQ4MTczNn0.STeAw8XjSOFQJO22BHgNNNCO7M6DamHqEiuh7o9gB6k";
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

const CollectionNames = {
    ParentCollection: {
        Name: 'Recipes Book',
        Slug: 'Recipes-Book',
        MultiRef: 'Multi_Recipes',
    },
    ChildCollection: {
        Name: 'Recipes',
        Slug: 'recipes',
    }
}

const siteUrl = 'http://multisinglee2e.dcms.site';

function createParentCollection() {
    cy.get('span.ant-menu-title-content')
        .contains('+ Add New Collection')
        .click();

    cy.get('.ant-modal-body').within(() => {
        //Collection Name
        cy.get('input').eq(1).type(CollectionNames.ParentCollection.Name)

        cy.get('span')
            .contains('Add Collection')
            .click();
    })
}

function createChildCollection() {
    cy.get('span.ant-menu-title-content')
        .contains('+ Add New Collection')
        .click();

    cy.get('.ant-modal-body').within(() => {
        cy.get('.ant-select-selector').click();
    });
    cy.get('div[title="Recipe"]').click();

    cy.get('.ant-modal-body').within(() => {
        cy.get('span')
            .contains('Add Collection')
            .click();
    });

    cy.get('span')
        .contains('Add 15 Recipe')
        .click();
}

function addMultiReferenceFieldToParent() {
    cy.contains('a', CollectionNames.ParentCollection.Name).click();

    cy.contains('a', 'Fields').click();

    cy.get('span')
        .contains(' Add New Field')
        .click();

    cy.get('.ant-modal-body').within(() => {
        cy.get('span.ant-select-selection-item')
            .eq(0)
            .click();
    });

    cy.get('div[title="Multiple reference"]').click();

    cy.get('.ant-modal-body').within(() => {
        cy.get('input').eq(1).type(CollectionNames.ParentCollection.MultiRef)
        cy.get('div.ant-select-selector')
            .eq(1)
            .click();
    });

    cy.get('div[title="Recipes"]').click();

    cy.get('.ant-modal-body').within(() => {
        cy.get('span')
            .contains('Create Field')
            .click();
    });
}

function addParentItems(itemsCount) {

    for (let index = 0; index < itemsCount; index++) {
        cy.contains('a', CollectionNames.ParentCollection.Name).click();

        cy.get('span')
            .contains(' New ' + CollectionNames.ParentCollection.Name)
            .click();

        cy.get('form.ant-form')
            .eq(1)
            .within(() => {
                cy.get('input')
                    .first()
                    .type(CollectionNames.ParentCollection.Name + ' ' + index);

                cy.get('input')
                    .eq(3)
                    .click();
            });


        cy.get('.rc-virtual-list-holder-inner').within(() => {
            for (let i = 0; i < 3; i++) {
                console.log(i);
                const divIndex = index * 3 + i;
                cy.get('div').eq(divIndex).click();
                cy.wait(100);
            }
        });

        cy.get('span')
            .contains('Publish')
            .click();

        cy.get('.ant-popconfirm').within(() => {
            cy.get('.ant-popover-buttons').within(() => {
                cy.get('span').contains('OK').click();
            });
        });
    }
}

function specifyDesignPage() {
    cy.visit(siteUrl + '/design');
    cy.wait(40000);

    cy.get('.gQafrc').eq(0).click();
    cy.get('span').contains('Recipes Book Template').click();
    cy.get('button.ant-btn-link').click();
    cy.wait(5000);

    cy.get("iframe#dorik-builder-iframe")
        .its("0.contentDocument.body")
        // .find('section.dorik-section')
        // .eq(0)
        .trigger("mouseover")
        .then(($div) => {
            const html = $div.html();
            cy.log(html);
        });
    // .within(() => {
    //     cy.get('button.wNzso').eq(0).click();
    // })

    // cy.wait(100);
    // cy.get("li").contains("Custom Section").click();
    // cy.wait(100);
    // cy.get("div.ffrtKa").click();

    // cy.get("iframe#dorik-builder-iframe")
    //     .its("0.contentDocument.body")
    //     .find("section.dorik-section")
    //     .eq(0)
    //     .trigger('mouseover')
    //     .then(($div) => {
    //         const html = $div.html();
    //         cy.log(html);
    //     });
    // .within(() => {
    //     cy.get("button")
    //         .contains("Add New Section")
    //         .click();
    // });

    // cy.get("iframe#dorik-builder-iframe").then(($iframe) => {
    //     const $body = $iframe.contents().find("body");
    //     cy.wrap($body).find('button:contains("+ Add New Section")').click();

    // });

    cy.wait(20000);

    // cy.wait(100);
    // cy.contains("li", "Custom Section").click();
    // cy.wait(100);
    // cy.get("div.ffrtKa").click();
}

function checkInCMSViewer() {


}


function RunOperation(dashUrl) {
    cy.visit(dashUrl);

    ////////// Will be Uncommented ///////////////
    // createParentCollection();
    // createChildCollection();
    // addMultiReferenceFieldToParent();
    // addParentItems(3);
    ////////// Will be Uncommented ///////////////


    ///////// Not completed due to cypress load issues ///////////////
    // specifyDesignPage();
    ///////// Not completed due to cypress load issues ///////////////

    checkInCMSViewer();
}

describe("Adding All Elements To A Single Section", () => {
    it("Add All Elements", () => {
        initiateCypressParams(1920, 1080);

        createOrRestoreSession();

        RunOperation(siteUrl + '/dashboard');
    });
});