describe("Test1",()=>{

    it("DB Test",()=>{

        cy.task("queryDb","select * from users").then((result)=>{
            console.log(result);
            expect(result[0].status).to.equal("Completed");
        })
    })

    

})