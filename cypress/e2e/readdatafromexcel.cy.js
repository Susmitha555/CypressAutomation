describe("Test suite", () => {

    it("Excel Sheet readding", () => {

        cy.task("readExcel", "Testdata.xlsx").then((result) => {
            cy.log(result);
            cy.log(JSON.stringify(result));
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            //implcit assertion
            cy.url().should('include', "opensource-demo.orangehrmlive.com").and('contain', "orangehrmlive");
            cy.get("input[name='username']").type(result[0].Username);
            cy.get("input[name='password']").type(result[0].Password);
            cy.get("button[type='submit']").click();

        })

    })
});
