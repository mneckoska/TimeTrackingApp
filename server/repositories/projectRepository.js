const Project = require("../models/project");
const Time=require("../models/time");

let id=1;
const generateId = () => id++;

let PROJECTS = [
    new Project(generateId(), "project 1" ,"opis1",[
        new Time(generateId(), "time1"),
        new Time(generateId(), "time2"),
        new Time(generateId(),"time 3...")
    ]),

    new Project(generateId(), "project2", "opis2", [
        new Time(generateId(),"time 4")
    ])
];

const findAll = () => {
    return PROJECTS;
}

const findById = (projectId) => {
    return PROJECTS.find((p) => p.id === projectId);
}

const create = (project) => {
    const newProject = new Project(generateId(), project.name);
    PROJECTS.push(newProject);
    return newProject;
}

const update = (updatedProject) =>
{
    PROJECTS=PROJECTS.map((project) => {
        if(project.id === updatedProject.id)
        {
            return updatedProject;
        }
        return project;
    });

    return updatedProject;

}

const deleteProject = (projectId) =>
{

    PROJECTS=PROJECTS.filter((project)=> project.id === projectId);
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteProject
}