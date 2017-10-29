const router = require('koa-router')();
const controller = require('../controllers/todo');

router.get('/', controller.getTodos);

router.post('/', controller.newTodo);

router.put('/:id', controller.editTodo);

router.del('/:id', controller.delTodo);

module.exports = router;
