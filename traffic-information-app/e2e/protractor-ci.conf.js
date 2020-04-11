const config = require('./protractor.conf').config;

// For a full list of the Selenium arguments, see here:
// https://peter.sh/experiments/chromium-command-line-switches/

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu'],
    binary: require('puppeteer').executablePath()
  }
};

exports.config = config;
