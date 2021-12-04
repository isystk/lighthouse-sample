const chromeLauncher = require('chrome-launcher');

async function chrome(opts) {
  return await chromeLauncher
    .launch({ chromeFlags: opts.chromeFlags });
}

const opts = {
  autoSelectChrome: true, // False to manually select which Chrome install.
  chromeFlags: [
    '--show-paint-rects',
    '--headless',
    '--disable-device-emulation',
    '--disable-gpu',
    '--enable-logging',
    '--no-sandbox'
  ]
};

module.exports = () => {
  return chrome(opts);
};