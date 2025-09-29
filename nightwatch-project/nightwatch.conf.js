const { WEB_BASE_URL } = require('./config/env');

module.exports = {
    src_folders: ['tests'],
    page_objects_path: 'page-objects',
    output_folder: 'tests_output',
  
    globals: {
      baseUrl: WEB_BASE_URL
    },
  
    test_settings: {
      default: {
        webdriver: {
          start_process: true,
          server_path: require('chromedriver').path,
          port: 9515,
        },
        desiredCapabilities: {
          browserName: 'chrome'
        }
      },
      ci: {
        webdriver: {
          start_process: true,
          server_path: require('chromedriver').path,
          port: 9515,
        },
        desiredCapabilities: {
          browserName: 'chrome',
          'goog:chromeOptions': {
            args: [
              '--headless',
              '--no-sandbox',
              '--disable-dev-shm-usage',
              '--disable-gpu',
              '--disable-web-security',
              '--window-size=1920,1080'
            ]
          }
        }
      },
      safari: {
        webdriver: {
          start_process: true,
          server_path: '/usr/bin/safaridriver',
          port: 4444,
        },
        desiredCapabilities: {
          browserName: 'safari'
        }
      }
    },
  
    reporters: [
      'junit',
      'json',
      './html-reporter.js'
    ]
  };  