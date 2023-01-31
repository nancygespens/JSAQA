describe('Login', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    
    it('Should open the main page', () => {
      cy.contains('Books list');
      cy.login('test@test.com', 'test');
      cy.contains('Добро пожаловать test@test.com').should('be.visible');
    });
    
    it('Should not login for empty login', () => {
      cy.login('', 'test');
      cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false');
      cy.get('#mail').then(($el) => $el[0].validationMessage).should('contain', 'Заполните это поле.');
    });
    
    it('Should not login for empty password', () => {
      cy.login('test@test.com');
      cy.get('#pass').then(($el) => $el[0].checkValidity()).should('be.false');
      cy.get('#pass').then(($el) => $el[0].validationMessage).should('contain', 'Заполните это поле.');
    });
  })