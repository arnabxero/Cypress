
// Function to generate a random email
function generateRandomEmail() {
    const emailPrefix = Math.random().toString(36).substring(2, 10); // Generate a random prefix
    const emailDomain = 'example.com'; // You can change the domain as needed
    return `${emailPrefix}@${emailDomain}`;
}

function generateRandomPassword() {
    const specialCharacters = "/~`!@#$%^&*()+_{[}/]|,.;:?'>";
    const passwordLength = Math.floor(Math.random() * (50 - 8 + 1)) + 8; // Random length between 8 and 50
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    // Create an array of characters including at least one of each required type
    const requiredCharacters = [
        lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length)),
        uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length)),
        numbers.charAt(Math.floor(Math.random() * numbers.length)),
        specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length)),
    ];

    // Fill the remaining characters with random characters
    while (requiredCharacters.length < passwordLength) {
        const characterType = Math.floor(Math.random() * 4); // 0 for lowercase, 1 for uppercase, 2 for number, 3 for special character
        let randomCharacter = '';

        switch (characterType) {
            case 0:
                randomCharacter = lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
                break;
            case 1:
                randomCharacter = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
                break;
            case 2:
                randomCharacter = numbers.charAt(Math.floor(Math.random() * numbers.length));
                break;
            case 3:
                randomCharacter = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
                break;
        }

        requiredCharacters.push(randomCharacter);
    }

    // Shuffle the characters to randomize the password
    for (let i = passwordLength - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [requiredCharacters[i], requiredCharacters[j]] = [requiredCharacters[j], requiredCharacters[i]];
    }

    return requiredCharacters.join('');
}

const randomEmail = generateRandomEmail();
const randomPassword = generateRandomPassword();

describe('Sign Up Test', () => {
    it('Sending the sign up api request', () => {
        const apiUrl = 'https://api.dorik.dev/graphql';

        const graphqlMutation = `
      mutation createUser(
        $passthrough: String
        $domain: String!
        $platform: Platform!
        $siteId: ID!
        $email: String!
        $password: String!
      ) {
        createUser(
          passthrough: $passthrough
          domain: $domain
          platform: $platform
          siteId: $siteId
          email: $email
          password: $password
        ) {
          success
          token
          message
          expiresAt
          user {
            id
            name
            role
            email
            avatar
            createdAt
          }
        }
      }
    `;

        const graphqlVariables = {
            passthrough: "03AFcWeA50CtprcHfE7JPAgEUJpyebGbQGhU7qNDkctiaOfPbXvV35cFWCK6LdAK_uEx5IBZ5Cje_jsw-CiIGwfdOhFherQKJ_heT2GcgR7Zn2Irpn5sT0FluLYnQRBXOj9HSYMZM2nsVjYtg8MNmfITmnLSYxmsMKdcXUpvy179uS_q4zEddldmEkVNrXxdLOg9fkZ5e5yBdKzOTzB8StvxlCTdJdEoLxotNvk3a9oAeKuZE3FEYnCmCLBQYUh7o_mp-v6ikYc5ugBTh-gjFlDfHjKFsv2VqFDxllHU6dfkBfj8woiN2RphEEGE5yPuQUE31CZyuNckjsuVv4mnkmtSVZj78BqS-aLBjtyFGSHL8xwEvH8EBM1Bdl66SBRY6x3oXvi2KfMRF59KqCY8IVx_Co2chXshCuhGRCvPK8JN7GTccNXtLnsLoglSlmU-XPX6nxft9bT73W2tuJDrYUSnyOcUMErFYQBompIy5Fgy1s_0zCcnI0knWA0S791PS2Lxug3L8YXosLoyFzQKMdgCRdH1PXV_YobyKJr5h6AKGmZM3vpmrnT8",
            domain: "https://app.dorik.dev",
            platform: "dorik",
            siteId: "6123ee5308f17882c5dd1143",
            email: randomEmail,
            password: randomPassword,
        };

        cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
                query: graphqlMutation,
                variables: graphqlVariables,
            },
        }).then((response) => {
            if (JSON.stringify(response.body.data.createUser.success) === 'true') {
                cy.log("success");
            } else {
                throw new Error("Failed to Sign Up");
            }
        });
    });
});


describe('Log In Test', () => {
    it('Try to login with the signed up credentials', () => {
        const graphqlMutation = `
  query login($passthrough: String!, $email: String!, $password: String!, $platform: Platform!, $siteId: ID!) {
    login(passthrough: $passthrough, email: $email, password: $password, platform: $platform, siteId: $siteId) {
      token
      success
      message
      expiresAt
      user {
        id
        role
        name
        email
        avatar
        createdAt
        meta {
          membership {
            planId
            promo
          }
          plan {
            planId
            promo
          }
        }
      }
    }
  }
`;
        const graphqlVariables = {
            passthrough: "03AFcWeA50CtprcHfE7JPAgEUJpyebGbQGhU7qNDkctiaOfPbXvV35cFWCK6LdAK_uEx5IBZ5Cje_jsw-CiIGwfdOhFherQKJ_heT2GcgR7Zn2Irpn5sT0FluLYnQRBXOj9HSYMZM2nsVjYtg8MNmfITmnLSYxmsMKdcXUpvy179uS_q4zEddldmEkVNrXxdLOg9fkZ5e5yBdKzOTzB8StvxlCTdJdEoLxotNvk3a9oAeKuZE3FEYnCmCLBQYUh7o_mp-v6ikYc5ugBTh-gjFlDfHjKFsv2VqFDxllHU6dfkBfj8woiN2RphEEGE5yPuQUE31CZyuNckjsuVv4mnkmtSVZj78BqS-aLBjtyFGSHL8xwEvH8EBM1Bdl66SBRY6x3oXvi2KfMRF59KqCY8IVx_Co2chXshCuhGRCvPK8JN7GTccNXtLnsLoglSlmU-XPX6nxft9bT73W2tuJDrYUSnyOcUMErFYQBompIy5Fgy1s_0zCcnI0knWA0S791PS2Lxug3L8YXosLoyFzQKMdgCRdH1PXV_YobyKJr5h6AKGmZM3vpmrnT8",
            domain: "https://app.dorik.dev",
            platform: "dorik",
            siteId: "6123ee5308f17882c5dd1143",
            email: randomEmail,
            password: randomPassword,
        };

        cy.request({
            method: 'POST',
            url: 'https://api.dorik.dev/graphql',
            body: {
                query: graphqlMutation,
                variables: graphqlVariables,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            if (JSON.stringify(response.body.data.login.success) === 'true') {
                cy.log("success");
            } else {
                throw new Error("Failed to Log In");
            }
        });
    });
});