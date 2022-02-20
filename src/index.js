import './style.css'
import DOMManip from './DOMManip';
import { Task } from './Task'
import { Project } from './Project';
import dataStorage from './dataStorage';

export const projectFunctions = (()=>{

    let _allProjects = [];

    const addProject = (e)=>{
        const newProjectInfo = DOMManip.getNewProjInfo();
        const goodProject = DOMManip.checkNewProject(e,newProjectInfo);
        if(goodProject){
            _allProjects.push(new Project(newProjectInfo.name));
            DOMManip.updateProjectList();
            dataStorage.saveData();

        }
    }
    const addTask = (e)=>{
        const newTaskInfo = DOMManip.getTaskInfo();
        const goodTask = DOMManip.checkNewTask(e, newTaskInfo);
        if(goodTask){
            _allProjects[newTaskInfo.project].tasks.push(new Task(newTaskInfo.name, newTaskInfo.description, 
                newTaskInfo.date, newTaskInfo.priority, '', newTaskInfo.project, newTaskInfo.number));
            DOMManip.addTaskToList();
            dataStorage.saveData();
        }
    }
    const confirmProjectEdit = (e)=>{
        const editTitle = DOMManip.getElement('.title-edit').value;
        const projectNumber = DOMManip.getElement('.title-edit').dataset.project;
        const goodProject = DOMManip.checkNewProject(e,{name:editTitle});
        if(goodProject){
            _allProjects[projectNumber].setTitle(editTitle);
            DOMManip.updateProjectList();
            dataStorage.saveData();
        }
    }
    
    const confirmTaskEdit = (e)=>{
        const editTask = e.currentTarget.parentElement.dataset.task;
        const editTaskInfo = DOMManip.getTaskInfo(editTask);
        const goodTask = DOMManip.checkNewTask(e, editTaskInfo);
        if(goodTask){
            _allProjects[editTaskInfo.project].tasks[editTask]=new Task(editTaskInfo.name, editTaskInfo.description, 
                editTaskInfo.date, editTaskInfo.priority, '', editTaskInfo.project, editTaskInfo.number);
            DOMManip.updateTaskList(editTask);
            dataStorage.saveData();
        }
    }

    const deleteProject = ()=>{
        const projectNumber = DOMManip.getElement('.selected').dataset.index;
        _allProjects.splice(projectNumber, 1);
        DOMManip.updateProjectList();
        DOMManip.showProject();
        dataStorage.saveData();
    }
    const toggleTaskComplete =(e)=>{
        const selectedTask = e.currentTarget.parentElement;
        const projectNumber = selectedTask.dataset.project;
        const taskNumber = selectedTask.dataset.task;
        _allProjects[projectNumber].tasks[taskNumber].toggleComplete();
        dataStorage.saveData();
        console.log(_allProjects)
        console.log(JSON.parse(localStorage.getItem('Projects')))
    }
    

    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }
    const loadProjects = ()=>{
        _allProjects = dataStorage.loadData();

    }

    return {addProject, addTask, confirmProjectEdit, confirmTaskEdit, deleteProject, toggleTaskComplete,
            getAllProjects, loadProjects}

})();

const initWebsite = (()=>{
    DOMManip.startPage();
})();


