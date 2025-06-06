
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "cypress/reports", // ** Path of .html file **//
    metadata: {
        browser: {
            name: "chrome",
            version: "95",
        },
        device: "Regression Tests",
        platform: {
            name: "Mac",
            version: "10.15.7",
        },
    },
});