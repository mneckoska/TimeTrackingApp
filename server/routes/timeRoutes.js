const express = require("express");
const timeController = require('../controllers/timesController');

const router = express.Router({ mergeParams: true });

router.get("/",timeController.findAll);
