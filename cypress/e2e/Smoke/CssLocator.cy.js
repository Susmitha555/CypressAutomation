//to use css no need to plugin we can us get method
//css locator
//tag idm->#
//tag class->.
//tag[attribute=value]
//class tag[attribute=value]
//to find the element using css we are using get method bub passing locators

describe("Xapth and Css Selector Test", () => {

    before("Launch the Url", () => {
        cy.fixture("userData").then((data) => {
            cy.visit(data.url);
        })

    });


    it("using CSS Id Test", () => {

        cy.fixture("userdata").then((data) => {

            cy.get("#name").type(data.name).should('have.value',data.name);
            cy.get(".form-control[id='email']").type(data.email).should('have.value',data.email);
             cy.get(".form-control").eq(2).type(data.phone).should('have.value',data.phone);
             cy.get('#textarea').type(data.address.doorNo);
             cy.get('#textarea').type(data.address.LandMark).should('have.value',data.address.doorNo+""+data.address.LandMark);
             cy.get("input[id=male]").check().should('be.checked');

    });
});








});