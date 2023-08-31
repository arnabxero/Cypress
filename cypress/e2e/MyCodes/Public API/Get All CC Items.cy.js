describe("API Test", () => {
  it("should send a GET request and print the response", () => {
    cy.request({
      method: "GET",
      url: "https://unlimitedpostwithpublicapi.dcms.site/api/cms/topics/64773c001dedbc0012237da6/items?page=1&perPage=193",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWFhNWQyNzg3NTQ2MDAxMjdjMjVjMCIsInBsYXRmb3JtIjoiY21zIiwic2l0ZUlkIjoiNjQ3NzNiZDkxZGVkYmMwMDEyMjM3Y2I1Iiwic3RhdHVzIjoiYWN0aXZlIiwicm9sZSI6InN1cGVyX3VzZXIiLCJwbGFuIjoiRlJFRSIsImlhdCI6MTY4NTUzNTcxMSwiZXhwIjoxNjg1NTM2NjExfQ.fObr7GgLOjy2FnFxpwRuWleWsYCXhratAdCTHmXnBPlObu3PZsVGAI_1a7NyueyF7ipvnXYcY5ksJSRcbFOZutx9Bb3Wy_OKB2Dl2JxwddkEFDz03i6eml4b5wBDxPj4H-PK9N7BKD7c7E133cEV77SUB1UEccVYHhQSRTmTqR4WiDgFXw-oQmSuun-of0_nGHfFfmDAazi1arwOOC7147iF8UzJdMvQivzpBky2F82wWoVe6yJ11nphuMAH46MbEPl5Piaf85WRpHNZvFJi6RnFS_o3SRXSFuGlTyZDYy2WbCu8cDnWAorxjune4JQ90Hllc4cNx_JIvG9Xu4c2mGvL2Blc7kbee1aYwgjVzvRen7V51MfJ0j9usgudqbKhhjsTUnE1hFigC4Em96xvCU2OZ0s4Ju49H7WMz4Jz118FOI4bCQ-6tW9qTfNVKCj3o3bN6Ozr0zNCDTrZ_JKgb-ORtT50I_jzKFBnNGMened19p-EQGn4Tfb9GLsILv3M-TSXgh_RmvIBgpNt3SXakoRbgW5kvMiNZbWoOr2ebGgoozJBrsLtSfNpyJJOJle_5zRyFuWuyqomRW72LhwSmr3fElEtmDjdcZnmWtLQPssd9efXBhpL8HkTBm2W0naZZiq56-aYEg93o18hkpA3H0e9-hrIsQfD1lS6fYGZujw",
      },
    }).then((response) => {
      cy.log(response.body);
    });
  });
});
