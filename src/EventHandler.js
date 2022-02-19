import DOMManip from "./DOMManip";
import { projectFunctions } from "./index.js";

const EventHandler = (()=>{
    const activateAddButton = ()=>{
        DOMManip.getElement("#add-project-button").removeEventListener('click', DOMManip.cancelNewProject);
        DOMManip.getElement("#add-project-button").addEventListener('click', DOMManip.setupNewProject);
    }

    const initStartingListeners = ()=>{
        activateAddButton();
        DOMManip.getElements('.dropdown-toggle').forEach(ele =>ele.addEventListener('click', DOMManip.expandToggle));
    }

    const addProjectSubmission = ()=>{
        DOMManip.getElement("#add-project-button").removeEventListener('click', DOMManip.setupNewProject);
        DOMManip.getElement("#add-project-button").addEventListener('click', DOMManip.cancelNewProject);
        DOMManip.getElement('#new-proj-add-button').addEventListener('click', projectFunctions.addProject);
    }

    const activateProjects = ()=>{
        DOMManip.getElements('.project-side-label').forEach(ele=>ele.removeEventListener('click', DOMManip.showProject));
        DOMManip.getElements('.project-side-label').forEach(ele=>ele.addEventListener('click', DOMManip.showProject));

    }
    const activateSides = ()=>{
        activateProjects()
    }
    const activateProjectButtons = ()=>{
        DOMManip.getElement('.edit-button.title').addEventListener('click', DOMManip.displayEditProject);
        DOMManip.getElement('.edit-button.delete').addEventListener('click', DOMManip.displayDeleteProject);
    }

    const activateCancelButton =(button)=>{
        button.addEventListener('click', DOMManip.cancelProjectEdit)

    }
    const activateAddTaskButton = ()=>{
        DOMManip.getElement('#add-task-button').addEventListener('click', projectFunctions.addTask);
    }

    const activateEditButton = button=>{
        button.removeEventListener('click', projectFunctions.confirmTaskEdit);
        button.addEventListener('click', DOMManip.displayEditTask);
    }
    const activateConfirmProjectEdit = button=>{
        button.removeEventListener('click', DOMManip.displayEditProject)
        button.addEventListener('click', projectFunctions.confirmProjectEdit);
    }
    const activateDeleteProject = button=>{
        button.addEventListener('click',projectFunctions.deleteProject)
    }

    const activateConfirmTaskEdit = button=>{
        button.removeEventListener('click', DOMManip.displayEditTask);
        button.addEventListener('click', projectFunctions.confirmTaskEdit);
        button.parentElement.lastElementChild.addEventListener('click', DOMManip.cancelEdit);

    }

    return{activateAddButton, initStartingListeners, addProjectSubmission, activateProjects, activateSides, 
        activateProjectButtons, activateAddTaskButton, activateEditButton, activateConfirmProjectEdit,
        activateConfirmTaskEdit, activateCancelButton, activateDeleteProject};
})();



export default EventHandler;