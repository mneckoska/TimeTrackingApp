const projectRepository = require("../repositories/projectRepository");

const findAll = (req,res) =>
{
    const projectId = Number(req.params.projectId);
    const project = projectRepository.findById(projectId);
    res.json(project.times);
};

module.exports = {
    findAll
};