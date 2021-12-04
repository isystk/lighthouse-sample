require('dotenv').config();

module.exports = (pageData, lightData) => {
  const https = require('https');

  const channel = `#${process.env.SLACK_CHANNEL_NAME}`;
  const text = `${pageData.title} 
  ・対象URL：${pageData.url}
  ==== サイトスコア ====
  Performance：${lightData.Performance*100}/100              Accessibility：${lightData.Accessibility*100}/100
  Best Practices：${lightData["Best Practices"]*100}/100            SEO：${lightData.SEO*100}/100
  Progressive Web App：${lightData["Progressive Web App"]*100}/100
  `;
  
  // // Time To First Byte：最初の1バイトが到着するまでの時間
  // // First Meaningful Paint：ページの主要なコンテンツがスクリーンに表示されるまでの時間。
  // // First Interactive：ページが最低限の操作を受け付けるようになるまでの時間。
  // // Consistently Interactive：ページが完全に操作を受け付けるようになるまでの時間。
  // ==== サイトスピード ====
  // Time To First Byte：${lightData.ttfb} ms  First Meaningful Paint：${lightData.["first-meaningful-paint"]} ms
  // First Interactive：${lightData["First Interactive"]} ms    Consistently Interactive：${lightData["Consistently Interactive"]} ms
  // `;
  const method = 'post';
  const username   = 'Lighthouse notice';

  console.log('channel:' + channel);

  const payload = {
    "channel": channel,
    "username": username,
    "text": text
  };

  const data = JSON.stringify(payload);

  const options = {
    hostname: 'hooks.slack.com',
    port: 443,
    path: `${process.env.SLACK_WEBHOOK_URL}`,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = https.request(options, (res) => {
    console.log('status code : ' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', (d) => {
      console.log(d)
    });
  });

  req.on('error', (e) => {
    console.error(e)
  ;});

  req.write(data);
  req.end();
}