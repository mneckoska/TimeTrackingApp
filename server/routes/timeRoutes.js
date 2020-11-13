const express = require("express");
const timeController = require('../controllers/timesController');

const router = express.Router({ mergeParams: true });

router.get("/projects/:projectId/times",timeController.findAll);

router.post("/times",timeController.createNewTime);

router.delete("/projects/:projectId/times/:timeId", timeController.deleteTime);

module.exports = router;
