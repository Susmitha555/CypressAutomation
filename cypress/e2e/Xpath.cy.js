describe("Test Xpath Tests",()=>
{
    //chained xpath
 it("xpath test1",()=>{
   
   cy.visit("https://testautomationpractice.blogspot.com/");
   cy.xpath("//input[@id='name']").type("Susmitha").should('have.value',"Susmitha")
   cy.xpath("//input[@id='email']").type("Susmitha@gmail.com").should('have.value',"Susmitha@gmail.com")
   cy.xpath("//input[@id='phone']").type("7338936456").should('have.value',"7338936456")
   cy.xpath("//textarea[@id='textarea']").type("Hazel Apart ment Avadi").should('have.length',1);
   cy.xpath("//div[@class='form-check form-check-inline']").xpath("./input").first().should('have.length',9);
  
 });



});
