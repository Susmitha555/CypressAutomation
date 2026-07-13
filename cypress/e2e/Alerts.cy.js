describe("alerts", () => {

    it("simplealert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.xpath("//button[text()='Click for JS Alert']").click();
        // to verify the  content in th alert
        cy.on("window:alert", (alert) => {

            expect(alert).to.contains("I am a JS Alert");
        })
        cy.get("#result").contains("You successfully clicked an alert");

    });

     it("Confirmation alert ok", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.xpath("//button[text()='Click for JS Confirm']").click();
        // to verify the  content in th alert
        cy.on("window:confirm", (alert) => {

            expect(alert).to.contains("I am a JS Confirm");
        })
        
        cy.get("#result").contains("You clicked: Ok");

    });

    it("Confirmation alert cancel", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.xpath("//button[text()='Click for JS Confirm']").click();
        // to verify the  content in th alert
        cy.on("window:confirm", (alert) => {

            expect(alert).to.contains("I am a JS Confirm");
        })
       cy.on("window:confirm",()=>false);
        cy.get("#result").contains("You clicked: Cancel");

    });

     it("Prompt alert typpe content and clickok by cypress", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win)=>{
          cy.stub(win,'prompt').returns("welcome");
        });
        cy.xpath("//button[text()='Click for JS Prompt']").click();
         cy.get("#result").contains("You entered: welcome");

    });

     it("Prompt alert typpe content and click cancel", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win)=>{
          cy.stub(win,'prompt').returns("null");
        });
        cy.xpath("//button[text()='Click for JS Prompt']").click();
        cy.on('window:prompt',()=> null);
         cy.get("#result").contains("You entered: null");

    });


    it.only("Auth popup", () => {

        cy.visit("https://Admin:admin123@opensource-demo.orangehrmlive.com/web/index.php/auth/login");
               

    });



});