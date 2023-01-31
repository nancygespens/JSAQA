describe('BookList', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
  });

  afterEach(() => {
    cy.contains('Log out').click();
  })
  
  it('Should add new book to Favorites', () => {
    cy.addBook('Test_title', 'Test_deskription', 'cypress/fixtures/cover.png', 'cypress/fixtures/file.txt', 'Test_author', true);
    cy.get('.card-body').contains('Test_title').should('be.visible');
  });
  
  it('Should add and delete book from favorites', () => {
    cy.addBook('Fairy tales', '0+', 'cypress/fixtures/cover.png', 'cypress/fixtures/file.txt', 'russian folk');
    cy.contains('Fairy tales').contains('Add to favorite').click({force:true});
    cy.visit('/favorites');
    cy.contains('Fairy tales').contains('Delete from favorite').click({force:true});
    cy.visit('/');
    cy.contains('Fairy tales').contains('Add to favorite').should('be.visible');
  });  
  
  it('Book page should have download button', () => {
    cy.addBook('Tongue-twisters', '0+', 'cypress/fixtures/cover.png', 'cypress/fixtures/file.txt', 'russian folk');
    cy.contains('Tongue-twisters').click();
    cy.wait(1000);
    cy.get('.btn-primary').contains('load').should('be.visible');
  });
});