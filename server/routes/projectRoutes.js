const express = require("express");

const projectController = require("../controllers/projectsController");

const router = express.Router();

router.get("/", projectController.findAll);

router.get("/:projectId", projectController.findById);

router.post("/", projectController.create);

router.put("/", projectController.update);

router.delete("/:projectId", projectController.deleteProject);

module.exports = router;
