const router = require('koa-router')();
const home = require('./home');
const todo = require('./todo');

router.use('/', home.routes(), home.allowedMethods());
router.use('/todos', todo.routes(), todo.allowedMethods());

module.exports = router;
