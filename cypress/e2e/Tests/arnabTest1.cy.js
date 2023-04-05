describe("Login", () => {
  it("Logs in successfully", () => {
    // function generateRandomString(length) {
    //   var result = "";
    //   var characters =
    //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   var charactersLength = characters.length;
    //   for (var i = 0; i < length; i++) {
    //     result += characters.charAt(
    //       Math.floor(Math.random() * charactersLength)
    //     );
    //   }
    //   return result;
    // }

    // function initiateCypressParams(screenHeight, screenWidth, siteURL) {
    //   cy.viewport(screenHeight, screenWidth);
    //   cy.visit(siteURL);
    // }

    // function Login(email, password) {
    //   // Enter the email address and password
    //   cy.get('input[type="email"]').type(email);
    //   cy.get('input[type="password"]').type(password);

    //   // Click the login button
    //   cy.get(".sc-bdVaJa.eNyXAb.mb-15").click();

    //   // Wait for 20 seconds
    //   cy.wait(20000);

    //   // Assert that the login was successful
    //   cy.url().should("include", "/dashboard");
    // }

    function loginToSiteWithToken(siteURL, token){
      let URL = siteURL+"/dashboard/auth/login?auto_login="+token;
      cy.visit(URL);
      cy.wait(10000);
    }

    // function CreateSite() {
    //   // Click on the CMS button
    //   cy.get('a[href="/dashboard/cms"]').click();

    //   // Click on the Start button
    //   cy.get('a[href="/cms/start"]').click();

    //   cy.wait(10000);
    //   // Click on the Create a new site button
    //   cy.contains("button", "Select") // Find all buttons with text "Select"
    //     .eq(0) // Select the first button
    //     .click(); // Click on the button

    //   // Set the value of the #title and #url inputs to the generated site name
    //   cy.get("#title").clear().type(generateRandomString(10));
    //   cy.get("#url").clear().type(generateRandomString(10));

    //   cy.get('button[type="submit"]') // Find the button with type="submit"
    //     .click(); // Click on the button
    // }


    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJhcm5hYkBkb3Jpay5pbyIsImlhdCI6MTY4MDA3ODI3NSwiZXhwIjoxNjgwMDc4NTc1fQ._8X3LURT3ugoIdf17jdLnCT-RqjAUCGZUDiHLXOyYOg";

    function TestFlow(){
     
      loginToSiteWithToken("https://cypresstestarnab1.dcms.site", authToken);
      
    }

    TestFlow();
  });
});
