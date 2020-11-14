const Project = require("../models/project");
const Time=require("../models/time");

let id=1;
const generateId = () => id++;

let PROJECTS = [
    new Project(generateId(), "project 1" ,"opis1",[
        new Time(generateId(), "time1",1),
        new Time(generateId(), "time2",2),
        new Time(generateId(), "time3",3)
    ]),

    
    new Project(generateId(), "project2", "opis2", [
        new Time(generateId(),"time 4", 4)
    ])
];

const findAll = () => {
    return PROJECTS;
}

const findById = (projectId) => {
    return PROJECTS.find((p) => p.id === projectId);
}

const create = (project) => {
    const newProject = new Project(generateId(), project.name, project.description, []);
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
    return PROJECTS = PROJECTS.filter((project)=> project.id != projectId);
      
}

const createTimeForProject = (time) => {
    const project = PROJECTS.find(x => x.id == time.projectId);
    if(!!project)   
    {
        project.times.push(new Time(generateId(),time.description,time.hours));
    }
  return project;
}

const deleteTimeForProject = (timeId, projectId) => {
    const project = PROJECTS.find(project => project.id == projectId);
    if (project) {
        return project.times.filter(timeInList => timeInList.id != timeId);
    }
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteProject,
    createTimeForProject,
    deleteTimeForProject
}