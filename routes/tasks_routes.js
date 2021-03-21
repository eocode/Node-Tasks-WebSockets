const express = require('express');
let TaskController = require('../controllers/tasks')
let router = express.Router();

router.route('/tasks')
    .get(TaskController.index)
    .post(TaskController.create);

router.get('/tasks/new', TaskController.new);
router.get('/tasks/:id/edit', TaskController.edit);

router.route('/tasks/:id') // wildcard
    .get(TaskController.show)
    .put(TaskController.update)
    .delete(TaskController.destroy);

module.exports = router;