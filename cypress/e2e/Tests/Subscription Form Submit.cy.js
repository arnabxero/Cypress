describe("Subscription Form Submission test with network interception", () => {
  it("Subscription form submission", () => {
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;

    cy.request({
      method: "POST",
      url: "https://41f5pv771f.execute-api.us-east-2.amazonaws.com/Prod/create-contact",
      headers: {
        "x-key-id": "665d83ec-7590-4989-802f-c5e9674d4c41",
        "x-project-id": "6423e641a1d7880037d88046",
      },
      body: {
        provider: "SEND_IN_BLUE",
        user: {
          email: randomEmail,
          listId: 2,
          attributes: {},
        },
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });
});
