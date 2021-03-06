ð lighthouse-sample
====

![GitHub issues](https://img.shields.io/github/issues/isystk/lighthouse-sample)
![GitHub forks](https://img.shields.io/github/forks/isystk/lighthouse-sample)
![GitHub stars](https://img.shields.io/github/stars/isystk/lighthouse-sample)
![GitHub license](https://img.shields.io/github/license/isystk/lighthouse-sample)

## ð ãã­ã¸ã§ã¯ãã®æ¦è¦

Lighthouse ã¯ãªã¼ãã³ã½ã¼ã¹ã®èªååããããã¼ã«ã§ã¦ã§ãã¢ããªã®åè³ªåä¸ã«å½¹ç«ã¡ã¾ãããã®ãã¼ã«ã¯ Chrome æ¡å¼µæ©è½ã¨ãã¦å®è¡ããããã³ãã³ãã©ã¤ã³ããå®è¡ã§ãã¾ãã Lighthouse ã«ç£æ»ããã URL ãæå®ãã¦å®è¡ããã¨ããã¼ã¸ã«å¯¾ããéä¸­çãªãã¹ããå®è¡ãã¦ããã©ã¼ãã³ã¹ã«é¢ããã¬ãã¼ããçæã§ãã¾ãã ä»å¾ã¯å¼±ç¹ãæ¤åºãããã¹ããå©ç¨ãã¦ãã¢ããªã®åè³ªæ¹åã®æéãå¾ãããããã«ãªãã¾ãã
CLI ãå©ç¨ãããã¨ã§ããªã³ã¯åããã§ãã¯ãªã©Lighthouseããããã¯ãã«ã§ä¾¿å©ã«ãããã¨ãã§ãã¾ãã

## ð Demo

![ãã¢](./demo.png "ãã¢")

## ð§ ç°å¢æ§ç¯

```
# Windowsã®å ´å
$ curl -L git.io/nodebrew | perl - setup
# Macã®å ´å
$ brew install nodebrew

# nodebrew ãã·ã§ã«ã®ãã¹ã«è¿½å ãã
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bashrc

# Node.js ãã¤ã³ã¹ãã¼ã« 
$ mkdir -p ~/.nodebrew/src
$ nodebrew ls-remote
$ nodebrew install v12.21.0
$ nodebrew use v12.21.0
$ npm install -g yarn

```

## ð¦ ãã£ã¬ã¯ããªæ§é 

```
.
âââ audits 
â   âââ broken-link.js
â
âââ plugin.js
âââ package.json
```

## ð¬ ä½¿ãæ¹

```
# ã¢ã¸ã¥ã¼ã«ã®ã¤ã³ã¹ãã¼ã«
$ yarn

# npmã®globalãã¹ã¸ã·ã³ããªãã¯ãªã³ã¯ãä½æãã¾ã
$ npm link
# currentãã¹ã¸ã·ã³ããªãã¯ãªã³ã¯ãä½æãã¾ã
$ npm link lighthouse-plugin-example

# lighthouseã³ãã³ãã§è¨æ¸¬ãã¦ã¿ã
$ npx lighthouse https://blog.isystk.com --plugins=lighthouse-plugin-example --view 

# Expressçµç±ã§è¨æ¸¬çµæãåå¾ãã
$ yarn start
$ curl "http://localhost:3000/lighthouse?url=https://blog.isystk.com" > ./result.output 

```

## ð¨ åè

| ãã­ã¸ã§ã¯ã| æ¦è¦|
| :---------------------------------------| :-------------------------------|
| [Lighthouseããããã¯ãã«ã§ä¾¿å©ã«ãã](https://qiita.com/murajun1978/items/f89df7a30890fa23fa87)| Lighthouseããããã¯ãã«ã§ä¾¿å©ã«ãã|


## ð« Licence

[MIT](https://github.com/isystk/lighthouse-sample/blob/master/LICENSE)

## ð Author

[isystk](https://github.com/isystk)


