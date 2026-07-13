//2 types of assertion
//implcit->should and
//explict assertion ->expect using then , assert

describe("Testing of Implicit Assertion",()=>{

it("implcit and Explicit test",()=>{

     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     //implcit assertion
     cy.url().should('include',"opensource-demo.orangehrmlive.com").and('contain',"orangehrmlive");
     cy.get("input[name='username']").type("Admin");
     cy.get("input[name='password']").type("admin123");
     cy.get("button[type='submit']").click();

     //explicit assertion BDD expect using then
      cy.get("ul>li>span>p").then((element)=>{
         let name=element.text();
         expect(name).to.equal("Ahmad Doe");
     });

     cy.get("div>p:nth-child(2)").eq(0).then((element)=>{
        let value=element.text();
        expect(value).to.contain("Time at Work");
        expect(value).to.not.equal("Time");
     });

     //using assert tdd style
     cy.contains("My Actions").then((ele)=>{
        let label=ele.text();
        assert.equal(label,"My Actions");
        assert.notEqual(label,"label");
     });





     
});


});