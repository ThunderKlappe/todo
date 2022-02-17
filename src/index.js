import './style.css'
import DOMManip from './DOMManip';
import EventHandler from './EventHandler';
import Task from './Task.js'
import { Project } from './Project';

const projectFunctions = (()=>{

    const _allProjects = [];

    const addProject = ()=>{
        const newProjectInfo = DOMManip.getNewProjInfo();
        const goodTask = DOMManip.checkNewProject(newProjectInfo);
        if(goodTask){
            _allProjects.push(new Project(newProjectInfo.title));
            DOMManip.addProjectToList();
        }
    }
    const addTask = ()=>{
        const newTaskInfo = DOMManip.getNewTaskInfo();
        const goodTask = DOMManip.checkNewTask(newTaskInfo);
        if(goodTask){
            _allProjects[newTaskInfo.project].tasks.push(new Task(newTaskInfo.name, newTaskInfo.description, 
                newTaskInfo.date, newTaskInfo.priority, '', newTaskInfo.project));
            DOMManip.addTaskToList();
        }
    }

    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }

    return{addProject, addTask, getAllProjects}

})();

const initWebsite = (()=>{
    setTimeout(DOMManip.fixStartingAnimations, 1);
    EventHandler.initStartingListeners();
})();

export {projectFunctions};

