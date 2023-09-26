describe("Login", () => {
  it("Logs in successfully", () => {

    function initiateCypressParams(screenHeight, screenWidth, siteURL) {
      cy.viewport(screenHeight, screenWidth);
      cy.visit(siteURL);
    }

    function loginToSiteWithToken(siteURL, token){
      let URL = siteURL+"/dashboard/auth/login?auto_login="+token;
      cy.visit(URL);
      cy.wait(10000);
    }

    const authToken = "";

    function TestFlow(){
      initiateCypressParams(1920, 1080, "https://app.dorik.com");

      loginToSiteWithToken("https://cypresstestarnab1.dcms.site", authToken);
    }

    TestFlow();
  });
});
