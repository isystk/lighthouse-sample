const CDP = require('chrome-remote-interface');
const chromeLauncher = require('./chromeLauncher.js');
const file = require('fs');

async function screenshot(url) {

  // Chromeに接続
  var launcher = await chromeLauncher();

  // Chrome DevTools Protocolを使う準備
  const client = await CDP({
      port: launcher.port
  });

  const {
      DOM,
      Page,
      Emulation,
      Runtime
  } = client;
  await Promise.all([Page.enable(), Runtime.enable(), DOM.enable()]);
  
  async function setDeviceSize(Emulation, deviceMetrics) {
    const { width, height } = deviceMetrics;
    await Emulation.setDeviceMetricsOverride(deviceMetrics);
    await Emulation.setVisibleSize({ width, height });
  }

  // デバイスのサイズを設定
  const deviceMetrics = {
    width: 1440,
    height: 900,
    deviceScaleFactor: 0,
    mobile: false,
    fitWindow: false,
  };
  await setDeviceSize(Emulation, deviceMetrics);

  // ページにアクセスして読み込みが完了するまで待機
  Page.navigate({ url: url });
  await Page.loadEventFired();

  // ページのTITLEタグを取得
  const script1 = "document.querySelector('title').textContent"
  const result = await Runtime.evaluate({
      expression: script1
  });

  // 画面キャプチャを取得
  const ss = await Page.captureScreenshot({fromSurface: true});
  // 画面キャプチャをファイルに出力
  // file.writeFile('screenshot.png', ss.data, 'base64', function(err) {
  //     if (err) {
  //         console.log(err);
  //     }
  // });

  // 終了処理
  client.close();
  launcher.kill();
  
  return {
    url : url,
    title : result.result.value,
    image : ss.data
  };

}

module.exports = url => {
  return screenshot(url);
};