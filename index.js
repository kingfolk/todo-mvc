const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

let router = new Router();

router.get('/', async (ctx) => {
  await ctx.render('index');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is starting at port 3000');
});

