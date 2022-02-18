import './style.css'
import DOMManip from './DOMManip';
import EventHandler from './EventHandler';
import Task from './Task.js'
import { Project } from './Project';

const projectFunctions = (()=>{

    const _allProjects = [];

    const addProject = (e)=>{
        const newProjectInfo = DOMManip.getNewProjInfo();
        const goodTask = DOMManip.checkNewProject(e,newProjectInfo);
        if(goodTask){
            _allProjects.push(new Project(newProjectInfo.title));
            DOMManip.addProjectToList();
        }
    }
    const addTask = (e)=>{
        const newTaskInfo = DOMManip.getTaskInfo();
        const goodTask = DOMManip.checkNewTask(e, newTaskInfo);
        if(goodTask){
            _allProjects[newTaskInfo.project].tasks.push(new Task(newTaskInfo.name, newTaskInfo.description, 
                newTaskInfo.date, newTaskInfo.priority, '', newTaskInfo.project));
            DOMManip.addTaskToList();
        }
    }
    const confirmEdit = (e)=>{
        const editTask = e.currentTarget.parentElement.dataset.task;
        const editTaskInfo = DOMManip.getTaskInfo(editTask);
        const goodTask = DOMManip.checkNewTask(e, editTaskInfo);
        if(goodTask){
            _allProjects[editTaskInfo.project].tasks[editTask]=new Task(editTaskInfo.name, editTaskInfo.description, 
                editTaskInfo.date, editTaskInfo.priority, '', editTaskInfo.project);
            DOMManip.updateTaskList(editTask);
        }
    }

    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }

    return{addProject, addTask, confirmEdit, getAllProjects}

})();

const initWebsite = (()=>{
    setTimeout(DOMManip.fixStartingAnimations, 1);
    EventHandler.initStartingListeners();
})();

export {projectFunctions};

