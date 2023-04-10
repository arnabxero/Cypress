const url =
  "https://deletetempsite1.dcms.site/dashboard/auth/login?auto_login=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYi5kb3Jpa0BnbWFpbC5jb20iLCJpYXQiOjE2ODA2NzY5NTcsImV4cCI6MTY4MDY3NzI1N30.OWLPezKorg-ptkqFDy8srKiomIHHeqcHFT3uZZqdJ2Q";
describe("Auto Login Test", () => {
  it("Auto Login Test", () => {
    cy.session(
      "user",
      () => {
        cy.visit(url);
        cy.wait(10000);
        cy.url().should("contain", "/dashboard");
      },
      {
        cacheAcrossSpecs: true,
      }
    );

    cy.visit("https://deletetempsite1.dcms.site/dashboard");
    cy.wait(10000);

    cy.contains("a", "Design & Pages").click();
  });
});
