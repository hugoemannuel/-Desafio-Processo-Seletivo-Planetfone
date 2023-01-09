const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController/userControler');

// Rota criada para fazer o get dos atributos do usuário

router.get('/', userController.getAllUser);

module.exports = router;