module.exports = {
    testEnvironment: "node",
    reporters: [
      "default",
      ["jest-html-reporter", {
        pageTitle: "API Test Report",
        outputPath: "./reports/api-test-report.html"
      }]
    ]
  };
  