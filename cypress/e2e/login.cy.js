describe('Acceder a My Account', () => {
  
  it('accede correctamente a la opción My Account', () => {
    // Paso 1: Visitar la página con autenticación
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });

    // Paso 2: Aceptar el popup de cookies y asegurarse de que no vuelva a aparecer
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

    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 
   
    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('qatest250450@gig.com');

    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc00-');  

    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });

  it('accede erroneamente a la opción My Account', () => {
    // Paso 1: Visitar la página con autenticación
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });

    // Paso 2: Aceptar el popup de cookies y asegurarse de que no vuelva a aparecer
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

    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 
   
    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('qatest250450@gig.com');

    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc-');  

    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  

  
  });
  
  it('multiple fails', () => {
    // Paso 1: Visitar la página con autenticación
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });

    // Paso 2: Aceptar el popup de cookies y asegurarse de que no vuelva a aparecer
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

    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 
   
    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('qatest250450@gig.com');

    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc-');  

    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  

  
});
});