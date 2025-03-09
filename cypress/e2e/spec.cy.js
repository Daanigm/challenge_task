class LoginPage {
    visit() {
      cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
        auth: {
          username: 'qatesting',
          password: 'qatesting_gig'
        }
      });
    }
  
    acceptCookies() {
      cy.get('#content > magic-notifications')
        .shadow()  // Acceder al shadow DOM
        .find('magic-ui-notification:nth-child(1)')
        .shadow()  // Acceder al siguiente shadow DOM
        .find('magic-cookie-popup-notification')
        .shadow()  // Acceder al siguiente shadow DOM
        .find('div > magic-ui-button')  // Encuentra el botón para aceptar
        .click();  // Hacer clic en el botón para aceptar cookies
  
      cy.get('#content > magic-notifications')
        .shadow()
        .find('magic-ui-notification:nth-child(1)')
        .should('not.exist');  
    }
  
    fillLoginForm(email, password) {
      cy.get('.buttons > [variant="primary"]', { timeout: 2000 })
        .should('be.visible')
        .click();
  
      cy.get('#email', { timeout: 1000 })
        .should('be.visible')
        .click()
        .type(email);
  
      cy.get('.peek-password > .form-field > .input', { timeout: 1000 })
        .should('be.visible')
        .click()
        .type(password);
    }
  
    submitLogin() {
      cy.get('.login-form > .action > .button', { timeout: 1000 })
        .should('be.visible')
        .click();
    }
  
    // Método para comprobar el mensaje de error
    verifyErrorMessage() {
      cy.get('.message', { timeout: 5000 })
        .should('be.visible')
        .and('contain.text', 'Invalid username or password');
    }
  }
  
  export default new LoginPage();
  