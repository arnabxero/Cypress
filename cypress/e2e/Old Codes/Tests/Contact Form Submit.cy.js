describe("Subscription Form Submission test with network interception", () => {
  it("Subscription form submission", () => {
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
    cy.request({
      method: "POST",
      url: "https://cypresstestarnab1.dcms.site/api/action/contact",
      form: {
        _t: "YXJuYWJAZG9yaWsuaW8=",
        _sub: "Form Submit Test",
        email: "fenjweiofj@gmail.com",
        subject: "weidfnweqdk",
        message: "wnfmqekdlq",
        _uid: "8r8f4e",
      },
    }).then((response) => {
      // Log the response body to the Cypress log
      cy.log(response.body);
    });
  });
});
