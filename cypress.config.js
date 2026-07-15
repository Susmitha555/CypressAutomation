const { defineConfig } = require("cypress");
const folder = process.env.REPORT_FOLDER || "default";
const mysql = require("mysql2");
const XLSX=require("xlsx");

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
    reportDir: "cypress/reports",
    //reportDir:`cypress/reports/${folder}`,
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

      on("task", {
        queryDb(query) {
          const connection = mysql.createConnection({
            host: '127.0.0.1',
             port: 3306,
             user: 'root',
             database: 'cypressdb'

          });

      return new Promise((resolve, reject) => {

        connection.query(query, (err, results) => {
          if (err) {
            reject(err);
          }
          else {
            connection.end();
            resolve(results);
          }
        });

      });


    }
    
  })
  
  on("task",{
      readExcel(fileName){
          const workbook=XLSX.readFile("C:/Users/HP/Documents/CypressLearning/cypress/fixtures/Testdata.xlsx");
          console.log(workbook.SheetNames);
          const worksheet=workbook.Sheets["sheet1"];
          console.log(XLSX.utils.sheet_to_json(worksheet));
          return XLSX.utils.sheet_to_json(worksheet);
      }  

       

    });


return config;
    },
  },
video: true,
  screenshotOnRunFailure: true
});

