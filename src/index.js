import './style.css'
import DOMManip from './DOMManip';
import { Task } from './Task'
import { Project } from './Project';
import dataStorage from './dataStorage';


//This export contains all of the functions related to accessing the project data 
//and task data throughout the website
export const projectFunctions = (()=>{

    let _allProjects = [];

    //gets the info that was put into the input, checks if it is acceptable, adds it to the 
    //allProjects array if it is, and saves to localstorage
    const addProject = (e)=>{
        const newProjectInfo = DOMManip.getNewProjInfo();
        const goodProject = DOMManip.checkNewProject(e,newProjectInfo);
        if(goodProject){
            _allProjects.push(new Project(newProjectInfo.name));
            DOMManip.updateProjectList();
            dataStorage.saveData();

        }
    }
    //gets the info that was put into the inputs, checks if it is all acceptable, adds it to the 
    //allProjects array under the correct project if it is, and saves to localstorage
    const addTask = (e)=>{
        const newTaskInfo = DOMManip.getTaskInfo();
        const goodTask = DOMManip.checkNewTask(e, newTaskInfo);
        if(goodTask){
            const newTask = new Task(newTaskInfo.name, newTaskInfo.description, 
                newTaskInfo.date, newTaskInfo.priority, '', newTaskInfo.project, newTaskInfo.number);
            _allProjects[newTaskInfo.project].tasks.push(newTask);
            DOMManip.updateTaskList(newTask.number, newTaskInfo.project, newTaskInfo.number);
            dataStorage.saveData();
        }
    }
    //does the same as a new project, but getting the information from different locations and
    //instead of adding a new project, adjusts the project at a certain index
    const confirmProjectEdit = (e)=>{
        const editTitle = DOMManip.getElement('.title-edit').value;
        const projectNumber = DOMManip.getElement('.project-container').dataset.project;
        const goodProject = DOMManip.checkNewProject(e,{name:editTitle});
        if(goodProject){
            _allProjects[projectNumber].setName(editTitle);
            DOMManip.updateProjectList();
            dataStorage.saveData();
        }
    }
    
    //does the same as a new task, but getting the information from different locations and
    //instead of adding a new task, adjusts the task at a certain index under a specific project

    const confirmTaskEdit = (e)=>{
        const editTask = e.currentTarget.parentElement.dataset.task;
        const editProject = e.currentTarget.parentElement.dataset.project
        const index = DOMManip.getTaskIndex(e);
        const editTaskInfo = DOMManip.getTaskInfo(editTask, editProject);
        const goodTask = DOMManip.checkNewTask(e, editTaskInfo);
        if(goodTask){
            _allProjects[editTaskInfo.project].tasks[editTask]=new Task(editTaskInfo.name, editTaskInfo.description, 
                editTaskInfo.date, editTaskInfo.priority, '', editTaskInfo.project, editTaskInfo.number);
            DOMManip.updateTaskList(editTask, editProject, index);
            dataStorage.saveData();
        }
    }

    //removes a project from the allProjects array and saves to localstorage

    const deleteProject = ()=>{
        const projectNumber = DOMManip.getElement('.project-container').dataset.project;
        _allProjects.splice(projectNumber, 1);
        if(DOMManip.getElement('#projects-toggle').classList.contains('closed')){
            DOMManip.getElement('#projects-toggle').click();
        }
        DOMManip.updateProjectList();
        DOMManip.displayTodaySide();
        DOMManip.showToday();
        dataStorage.saveData();
    }

    //gets when a checkbox has been clicked and changes the task's status to complete if it's not
    //complete, and removes that if it's been unchecked.
    const toggleTaskComplete =(e)=>{
        const selectedTask = e.currentTarget.parentElement;
        const projectNumber = selectedTask.dataset.project;
        const taskNumber = selectedTask.dataset.task;
        _allProjects[projectNumber].tasks[taskNumber].toggleComplete();
        if(DOMManip.getElement('.selected').id == 'todays-todo-side'){
            DOMManip.showToday(e)
        }else{
            DOMManip.showProject(e);
        }
        dataStorage.saveData();
    }
    
    //returns a read-only copy of the projects in the allProjects array
    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }
    //saves the loaded projects from localstorage into the allprojects array
    const loadProjects = ()=>{
        _allProjects = dataStorage.loadData();

    }

    return {addProject, addTask, confirmProjectEdit, confirmTaskEdit, deleteProject, toggleTaskComplete,
            getAllProjects, loadProjects}

})();


//runs at the load of the website
const initWebsite = (()=>{
    DOMManip.startPage();
})();


