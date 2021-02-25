const express = require('express');

const homeController = require('../controllers/homeController');
const screenController = require('../controllers/screenController');

const router = express.Router();
router.use("/vendors",express.static(__dirname + "/vendors"));
router.use("/js",express.static(__dirname + "/js"));

// Rotas 
router.get('/', homeController.index);
router.get('/screen', screenController.index); 

module.exports = router;