'use strict';

var express = require('express');
var controller = require('./email.controller');

var router = express.Router();

router.get('/', controller.getCustomers);
// router.delete('/:id', auth.hasRole('admin'), controller.destroy);
// router.get('/me', auth.isAuthenticated(), controller.me);
// router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
// router.get('/:id', auth.isAuthenticated(), controller.show);
// router.post('/', controller.create);

module.exports = router;
