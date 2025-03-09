describe('wager limmits', () => {
    it('Put a wager limit', () => {
      
      cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
        auth: {
          username: 'qatesting',
          password: 'qatesting_gig'
        }
      });
  
     
      cy.get('#content > magic-notifications')
        .shadow()  
        .find('magic-ui-notification:nth-child(1)')
        .shadow()  
        .find('magic-cookie-popup-notification')
        .shadow() 
        .find('div > magic-ui-button')  
        .click();  
  
   
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

      cy.wait(2000);

      cy.get('.menu > .link > .icon').click()
      cy.get('.items > :nth-child(1) > .link > .icon').click()
      
      cy.get('#content > div > magic-account-menu')
        .shadow()
        .find('ul > li:nth-child(3) > a > div.action > magic-ui-icon', { timeout: 1000 }) 
        .click();

      cy.get('#content > div > div > magic-view-limits') 
        .shadow()  
        .find('div > div > div.action > magic-ui-link')  
        .shadow()  
        .find('magic-ui-button')  
        .shadow()  
        .find('a')  
        .should('be.visible')  
        .click({ force: true });  

       cy.get('#content > div > div > magic-create-limits')  
        .shadow()  
        .find('div > form > magic-ui-form-field.input')  
        .shadow()  
        .find('div > magic-ui-input')  
        .shadow()  
        .find('input')  
        .type('4000');  
  
       cy.get('#content > div > div > magic-create-limits')  
        .shadow()  
        .find('div > form > div > magic-ui-button') 
        .shadow()  
        .find('button')  
        .click();  


      
      


       
      


    });
  });

  