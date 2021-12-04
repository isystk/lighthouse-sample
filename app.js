const express = require('express');
const app = express();
const port = 3000;

const screenshot = require('./src/screenshot.js');
const lighthouse = require('./src/lighthouse.js');
const slackSend = require('./src/slackSend.js');
const config = require('./custom-config.js');

app.get('/lighthouse', async function(req, res, next) {
    try {
        // 入力チェック
        console.log(req.query);
        if (!req.query.url || req.query.url === '') {
            throw new Error('URLを入力して下さい');
        }
        
        // アクセスしてキャプチャを取る
        console.log('アクセスしてキャプチャを取る');
        var pageData = await screenshot(req.query.url);
        console.log('title:' + pageData.title);

        // lighthouseで計測
        console.log('lighthouseで計測');
        var lighthouseData = await lighthouse(req.query.url, config);
        console.log('results:' + JSON.stringify(lighthouseData));

        // // Slackに結果を送信
        // console.log('Slackに結果を送信');
        // slackSend(pageData, lighthouseData);

        res.json(Object.assign({}, lighthouseData, pageData));

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

app.listen(port, () => {
    console.log('Server started on port:' + port);
});