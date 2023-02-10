// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("login", (login, password) => {
//     cy.contains("Log in").click();
//     cy.get("#mail").type(login);
//     cy.get("#pass").type(password);
//     cy.contains("Submit").click();
// });
// Cypress.Commands.add('typeForm', (title, description, authors) => {
//     cy.contains("Add new").click();
//     cy.contains("Book description");
//     cy.get("#title").type(title);
//     cy.get("#description").type(description);
//     cy.get("#authors").type(authors);
// });
Cypress.Commands.add("createUser", (user) => {
    cy.request({
        method: "POST",
        url: "https://petstore.swagger.io/v2/user",
        body: {
            id: 1,
            username: "string",
            firstName: "string",
            lastName: "string",
            email: "string",
            password: "string",
            phone: "string",
            userStatus: 1,
        },
    }).then((resp) => {
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            headers: {
                Authorization: "Wowfun" + resp.body.token,
            },
            body: user,
        });
    });
}); 
