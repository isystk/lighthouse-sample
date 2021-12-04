const lighthouse = require('lighthouse');
const chromeLauncher = require('./chromeLauncher.js');

async function runLighthouse(url, config = null) {
  
  // Chromeに接続
  var launcher = await chromeLauncher();

  // lighthouse の計測
  return lighthouse(url, {
    port : launcher.port
  }, config).then(results => {
    delete results.artifacts;
    delete results.report;
    
    const scoreMap = Object.entries(results.lhr.audits).reduce(
      (acc, [key, a]) => {
        if (a.scoreDisplayMode === 'numeric') {
          return Object.assign({}, acc, { [key]: a.score });
        }
        return acc;
      },
      {}
    );

    const scoreCategories = Object.entries(results.lhr.categories).reduce(
      (acc, [key, a]) => {
        return Object.assign({}, acc, { [a.title]: a.score });
        return acc;
      },
      {}
    );

    // 終了処理
    launcher.kill();
  
    return Object.assign(scoreCategories, scoreMap);
  });
}

module.exports = (url, config) => {
  return runLighthouse(url, config);
};