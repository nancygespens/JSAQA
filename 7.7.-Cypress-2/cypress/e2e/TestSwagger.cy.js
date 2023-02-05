//const { describe } = require("mocha");

//const { expect } = require("chai");

//const { expect } = require("chai");

//const { expect } = require("chai");

describe("Swagger", () => {
    /*let user = {};
    const USER_ID = 1050508976;
    const USER_NAME = "Plushcake";
    */
  
    it("Create", () => {
      cy.createUser({
        id: "50550550555",
        username: "Nancy",
        firstName: "Gespens",
        lastName: "gespens ninja",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 1,
      }).then(({ body, status }) => {
        cy.log(JSON.stringify(body));
        cy.log(status);
        expect(status).to.eq(200);
      });
    });
  
    it("Put", () => {
      cy.createUser({
        id: "50550550555",
        username: "Nancy",
        firstName: "Gespens",
        lastName: "gespens ninja",
        email: "string",
        password: "1234",
        phone: "string",
        userStatus: 1,
      });
      cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/user/Nancy",
        body: {
          id: "50550550555",
          username: "Nancy",
          firstName: "Gespens",
          lastName: "Eclair",
          email: "tortiki@namnam",
          password: "554433",
          phone: "No",
          userStatus: 0,
        },
      }).then(({ body, status }) => {
        cy.log(body);
        cy.log(status);
        expect(status).to.eq(200);
      });
    });
  
    it("Delete", () => {
      cy.createUser({
        id: "50550550555",
        username: "Nancy",
        firstName: "Gespens",
        lastName: "gespens ninja",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 1,
      });
      cy.request({
        method: "DELETE",
        url: `https://petstore.swagger.io/v2/user/Nancy`,
      }).then(({ status }) => {
        cy.log(status);
        expect(status).to.eq(200);
      });
    });
  
    it("Deletion check", () => {
      cy.request({
        method: "GET",
        url: `https://petstore.swagger.io/v2/user/Nancy`,
        failOnStatusCode: false,
      }).then(({ status }) => {
        cy.log(status);
        expect(status).to.eq(404);
      });
    });
  });