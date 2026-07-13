describe("drop down test", () => {

    it("select 1st 3 checkboxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#country").select("India").should('have.value', "india");
        //boostrap dron dow

    });



    it("Autosusgesstion dripdow static", () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").type("Delhi");
        //cy.pause();
        cy.wait(1000);
        cy.get(".suggestions-dropdown:nth-child(1)>a").should('have.length', 6);
        cy.get(".suggestions-dropdown:nth-child(1)>a").contains("Delhi University").click();
        cy.wait(1000);
        cy.origin("https://en.wikipedia.org/wiki/Delhi_University", () => {
            cy.get("#firstHeading:nth-child(2)>span>span.mw-page-title-main").should('be.visible');
        });
    });



    //boostrap dron down
    it("Autosusgesstion dripdow dynamic", () => {
        cy.visit("https://www.google.com/");
        cy.get("[name='q']").type("cypress automation tool");
        cy.wait(5000);
         cy.get('div.pcTkSc').should('have.length',13);
          cy.wait(5000);
        cy.xpath("//ul[@role='listbox']//li//div//span").each(($el, index, $elements) => {
            cy.log($el.text());
            if ($el.text().trim()=='cypress automation tool') {
                cy.wrap($el).click();

            }

        })
        cy.get("[name='q']").should('have.value',"cypress automation tool");

    });


});






