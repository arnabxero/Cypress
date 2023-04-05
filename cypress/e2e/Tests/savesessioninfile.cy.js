const auth_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYi5kb3Jpa0BnbWFpbC5jb20iLCJpYXQiOjE2ODA2NzQ2OTYsImV4cCI6MTY4MDY3NDk5Nn0.h9N4BSq1yKnV8EbnegjHGHcybfsXA4OT5Kxg7ZrIpBE";
const url =
  "https://deletetempsite1.dcms.site/dashboard/auth/login?auto_login=";

const sessionFile = "cypress/e2e/Tests/session.json";

describe("Login API", () => {
  it("Test", () => {
    cy.request({
      method: "POST",
      url: url + auth_token,
      body: {},
    }).then((response) => {
      // const cookie = response.headers['set-cookie'][0];
      // cy.setCookie('your-cookie-name', cookie);

      // // save cookie to file
      // cy.writeFile('cookie.txt', cookie);


      const cookies = response.headers["set-cookie"];
      if (cookies && cookies.length > 0) {
        const cookie = cookies[0];
        cy.setCookie("your-cookie-name", cookie);
        // save cookie to file
        cy.writeFile("cookie.txt", cookie);

        cy.log("Cookie: " + cookie);
        
      } else {
        throw new Error("Unable to find cookie in the login response");
      }
    });
  });
});
