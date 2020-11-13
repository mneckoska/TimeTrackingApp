const express = require("express");
const timeController = require('../controllers/timesController');

const router = express.Router({ mergeParams: true });

router.get("/",timeController.findAll);

router.post("/",timeController.createNewTime);

module.exports = router;
