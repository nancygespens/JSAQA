describe("API test", () => {
  it("Should post a new user", () => {

      cy.createUser({
          id: 453678,
          username: "TestUser001",
          firstName: "Vasilij",
          lastName: "Podushkin",
          email: "VPodushku@email.pl",
          password: "1q2w3e",
          phone: "+2378987678",
          userStatus: 2,
      }).then((response) => {
          cy.log(JSON.stringify(response.body));
          expect(response.status).to.eq(200);
      });
  });

  it("Should put updated user", () => {
  
    cy.createUser({
        id: 453678,
        username: "UpdateUser001",
        firstName: "Dasha",
        lastName: "Marfushkina",
        email: "DashMarf@mail.kr",
        password: "1w2e3r",
        phone: "7635564888",
        userStatus: 2,
    });

    cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/user/TestUser001",
        body: {
            id: 453678,
            username: "UpdateUser001",
            firstName: "Dasha",
            lastName: "Vagina",
            email: "DashVag@mail.kr",
            password: "123qweasd",
            phone: "7635564888",
            userStatus: 1,
        },
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
    });
});

it("Should deleted user", () => {
    
    cy.createUser({
        id: 453678,
        username: "ShouldDeleteUser",
        firstName: "Mihail",
        lastName: "Tort",
        email: "Tort@mail.kr",
        password: "0987654",
        phone: "223445566778",
        userStatus: 2,
    });

    cy.request({
        method: "DELETE",
        url: "https://petstore.swagger.io/v2/user/ShouldDeleteUser",
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
    });
});
}); 
