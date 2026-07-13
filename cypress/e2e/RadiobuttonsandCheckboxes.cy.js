describe("Radio button test suite", () => {

    it.skip("radio test1", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#male").should('be.visible');
        cy.get("#male").check().should('be.checked');
        cy.get("#female").check().should('be.checked');
        cy.get("#male", { timeout: 100 }).should('not.be.checked');

    });

    it.skip("checkboxes test one check boxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#sunday").should('be.visible');
        cy.get("#sunday").check().should('be.checked');
        cy.get("#sunday").uncheck().should('not.be.checked');
    });

    it.skip("select and unselect all checkboxes at once", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").should('be.visible');
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").check().should('be.checked');
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").uncheck().should('not.be.checked');
    });

    it("select first checkboxe", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").first().should('be.visible');
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").first().check().should('be.checked');

    });

    it("select last checkbox", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").last().should('be.visible');
        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").last().check().should('be.checked');

    });

    it.only("select 1st 3 checkboxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.clearAllCookies();
        // cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").eq(3).should('be.visible');
        // cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").eq(3).check().should('be.checked');
        // cy.get("div[class='form-check form-check-inline']>input[type='checkbox']").each((checkbox,index)=>{
        //     if(index<3){
        //     cy.wrap(checkbox).check().should('be.checked');
        //     }
        // })

        cy.get("div[class='form-check form-check-inline']>input[type='checkbox']")
        .then((checkboxes)=>{
            for(let i=checkboxes.length;i>=checkboxes.length-2;i++)
            {
                cy.wrap(checkboxes[i]).check().should('be.checked');
            }
        })
        
        
    });


});

