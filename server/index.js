const path = require('path');
const Koa = require('koa');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const router = require('./routers');

const app = new Koa();

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is starting at port 3000');
});

module.exports = app;
