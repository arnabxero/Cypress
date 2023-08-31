function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

describe("Subscription Form Submission Test", () => {
  it("Subscription form submission", () => {
    for (let i = 0; i < 1000; i++) {
      const name = generateRandomString(10);
      const slug = generateRandomString(20);
      const htmlContent = generateRandomString(15);

      cy.request({
        method: "POST",
        url: "https://cms-api.dorik.com/api/v1/collections/64773c001dedbc0012237da6/items",
        headers: {
          "x-dorik-key":
            "332f980793ca856e4d3a1564deebe3454839b8ebd1a4f2d3b932fe4151dbaf26",
          "Content-Type": "application/json",
        },
        body: {
          name: name,
          slug: slug,
          htmlContent: htmlContent,
        },
      });
    }
  });
});
