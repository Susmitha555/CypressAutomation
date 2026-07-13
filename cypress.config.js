const { defineConfig } = require("cypress");
const folder = process.env.REPORT_FOLDER || "default";

// function getTimeStamp(){
// let d=new Date();

// let dd=String(d.getDate()).padStart(2,"0");
// let mon=String(d.getMonth()+1).padStart(2,"0");
// let yyyy=d.getFullYear();

// let hh=String(d.getHours()).padStart(2,"0");
// let mm=String(d.getMinutes()).padStart(2,"0");
// let ss=String(d.getSeconds()).padStart(2,"0");

// return `${dd}${mon}${yyyy}_${hh}${mm}${ss}`;


// }
module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: "cypress-mochawesome-reporter",
  
  reporterOptions: {
   // reportDir: `cypress/reports/Test${getTimeStamp()}`,
  // reportDir: "cypress/reports",
     reportDir:`cypress/reports/${folder}`,
     charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveJson: true
  },

  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
  video: true,
  screenshotOnRunFailure: true
});

