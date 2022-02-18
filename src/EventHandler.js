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
        DOMManip.getElements('.project-side-label').forEach(ele=>ele.addEventListener('click', DOMManip.showProject));

    }
    const activateEditProject = ()=>{
        DOMManip.getElement('.project-title-wrapper button').addEventListener('click', DOMManip.displayEditProject);
    }
    const activateAddTaskButton = ()=>{
        DOMManip.getElement('#add-task-button').addEventListener('click', projectFunctions.addTask);
    }

    const activateEditButton = button=>{
        button.removeEventListener('click', projectFunctions.confirmEdit);
        button.addEventListener('click', DOMManip.displayEditTask);
    }
    const activateConfirmProjectEdit = button=>{
        button.removeEventListener('click', DOMManip.displayEditProject)
        button.addEventListener('click', projectFunctions.confirmProjectEdit);
    }

    const activateConfirmTaskEdit = button=>{
        button.removeEventListener('click', DOMManip.displayEditTask);
        button.addEventListener('click', projectFunctions.confirmTaskEdit);
        button.parentElement.lastElementChild.addEventListener('click', DOMManip.cancelEdit);

    }

    return{activateAddButton, initStartingListeners, addProjectSubmission, activateProjects, 
        activateEditProject, activateAddTaskButton, activateEditButton, activateConfirmProjectEdit,
        activateConfirmTaskEdit};
})();



export default EventHandler;