describe('Acceder a My Account', () => {
    it('accede correctamente a la opción My Account', () => {
      // Paso 1: Visitar la página con autenticación
      cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
        auth: {
          username: 'qatesting',
          password: 'qatesting_gig'
        }
      });
  
      // Paso 2: Aceptar el popup de cookies
      cy.get('#content > magic-notifications')
        .shadow()
        .find('magic-ui-notification:nth-child(1)')
        .shadow()
        .find('magic-cookie-popup-notification')
        .shadow()
        .find('div > magic-ui-button')
        .click();
  
      // Paso 3: Asegurarse de que el popup no aparezca
      cy.get('#content > magic-notifications')
        .shadow()
        .find('magic-ui-notification:nth-child(1)')
        .should('not.exist');
  
      // Paso 4: Ingresar credenciales
      cy.get('.buttons > [variant="primary"]', { timeout: 10000 }).click();
      cy.get('#email').type('qatest250450@gig.com');
      cy.get('.peek-password > .form-field > .input').type('Testerc00-');
      cy.get('.login-form > .action > .button').click();
  
      cy.wait(2000);
  
      // Paso 5: Intentar hacer clic en el enlace con desplazamiento
      cy.get('#app > aside > nav')
        .scrollIntoView({ offset: { top: -100 } })
        .find('li:nth-child(10) > a')
        .should('be.visible')  // Asegura que el enlace es visible
        .click({ force: true });  // Forzamos el clic en caso de que el elemento esté cubierto
  
      // Opcionalmente, verificar el comportamiento tras el clic
      cy.url().should('include', '/path/to/expected/page');  // Verifica que la URL cambie como se espera
    });
  });
  