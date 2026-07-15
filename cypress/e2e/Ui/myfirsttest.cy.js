describe("Test Suite", () => {

   it("Test1 using Arrosw Function", () => {

      cy.visit("https://testautomationpractice.blogspot.com/");
      cy.title().should("include", "Automation Testing Practice");
      cy.url().should("include", "testautomationpractice");


   });

   it("Test2 using function block", function () {
      cy.visit("https://testautomationpractice.blogspot.com/");
      cy.get("#name").type("Susmitha").should('have.value', "Susmitha");
      cy.screenshot("HomePage2");

   });




});




