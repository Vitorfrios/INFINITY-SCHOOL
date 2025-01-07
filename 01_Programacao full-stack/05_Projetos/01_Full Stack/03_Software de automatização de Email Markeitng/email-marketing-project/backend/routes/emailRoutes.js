// backend/routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Rota para disparar um e-mail
router.post('/send', emailController.sendEmail);

module.exports = router;
