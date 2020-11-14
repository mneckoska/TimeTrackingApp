const projectRepository = require("../repositories/projectRepository");

const findAll = (req, res) => {
  res.json(projectRepository.findAll());
};

const findById = (req, res) => {
  const projectId = Number(req.params.projectId);
  res.json(projectRepository.findById(projectId));
};

const create = (req, res) => {
  const newProject = projectRepository.create(req.body);
  res.json(newProject);
  res.status(200);
};

const update = (req, res) => {
  const updatedProject = projectRepository.update(req.body);
  res.json(updatedProject);
  res.status(200);
};

const deleteProject = (req, res) => {
  const projectId = Number(req.params.projectId);
  const projects = projectRepository.deleteProject(projectId);
  res.json(projects);
  res.status(200);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteProject,
};
