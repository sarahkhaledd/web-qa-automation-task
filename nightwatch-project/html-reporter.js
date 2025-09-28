var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/tests_output',
  reportFilename: 'report.html',
  themeName: 'default'
});

module.exports = {
  write: function(results, options, done) {
    reporter.fn(results, done);
  }
};