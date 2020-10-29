const express = require("express");
const timeRoutes = require("./timeRoutes");
const projectController = require("../controllers/projectsController");

const router=express.Router();

router.get("/",projectController.findAll);

router.get("/:projectId", projectController.findById);

router.post("/",projectController.create);

router.put("/:projectId",projectController.update);

router.delete("/:projectId", projectController.deleteProject);

//router.use("/:projectId/times", timeRoutes);

module.exports = router;