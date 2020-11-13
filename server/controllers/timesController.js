const projectRepository = require("../repositories/projectRepository");

const findAll = (req,res) =>
{
    const projectId = Number(req.params.projectId);
    const project = projectRepository.findById(projectId);
    res.json(project.times);
};

const createNewTime=(req,res) =>
{
    const newTime = projectRepository.createTimeForProject(req.body);
    res.json(newTime);
    res.status(200);
}

const deleteTime = (req, res) => {
    const times = projectRepository.deleteTimeForProject(req.params.timeId, req.params.projectId);
    res.json(times);
}

module.exports = {
    findAll,
    createNewTime,
    deleteTime
};