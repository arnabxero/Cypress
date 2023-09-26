describe('Login API', () => {
  it('Logs in and saves auth token as cookie', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.dorik.com/graphql',
      body: {
        query: `mutation Login($email: String!, $password: String!, $platform: String!, $siteId: String!) {
          loginwith(email: $email, password: $password, platform: $platform, siteId: $siteId) {
            token
          }
        }`,
        variables: {
          email: 'arnab@dorik.io',
          password: 'arnab.dorik.247',
          platform: 'dorik',
          siteId: '615b1d3cadd6d25163582c25'
        }
      }
    }).then((response) => {
      const token = response.body.data.login.token
      cy.setCookie('auth-token', token)
    })
  })
})
