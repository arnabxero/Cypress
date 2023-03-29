describe("Login", () => {
  it("Logs in successfully", () => {
    cy.viewport(1519, 763);

    // Visit the login page
    cy.visit("https://app.dorik.com");

    // Enter the email address and password
    cy.get('input[type="email"]').type("arnab@dorik.io");
    cy.get('input[type="password"]').type("arnab.dorik.247");

    // Click the login button
    cy.get(".sc-bdVaJa.eNyXAb.mb-15").click();

    // Wait for 20 seconds
    cy.wait(20000);

    // Assert that the login was successful
    cy.url().should("include", "/dashboard");

    cy.get('a[href="/dashboard/cms"]').click();

    cy.get('a[href="/cms/start"]').click();

    cy.get("button.sc-bdVaJa.gPxnGF").click();

    // Generate a random site name with only a to z characters without any space
    const siteName = Math.random().toString(36).substring(2, 10);

    // Set the value of the #title and #url inputs to the generated site name
    cy.get("#title").clear().type(siteName);
    cy.get("#url").clear().type(siteName);
  });
});
