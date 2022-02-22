import DOMManip from "./DOMManip";
import { projectFunctions } from "./index";

const EventHandler = (()=>{
    

    //activates the Add project button
    const clearTextBox = ()=>{
        DOMManip.getElements("input[type=\"text\" i]").forEach(ele=>ele.removeEventListener("click", DOMManip.removeText, {once:true}));
        DOMManip.getElements("input[type=\"text\" i]").forEach(ele=>ele.addEventListener("click", DOMManip.removeText, {once:true}));

    };

    const activateAddButton = ()=>{
        DOMManip.getElement("#add-project-button").removeEventListener("click", DOMManip.cancelNewProject);
        DOMManip.getElement("#add-project-button").addEventListener("click", DOMManip.setupNewProject);
    };

    //activates the add button and the side toggles
    const initStartingListeners = ()=>{
        activateAddButton();
        DOMManip.getElements(".dropdown-toggle").forEach(ele =>ele.addEventListener("click", DOMManip.expandToggle));
    };

    //changes the add project button to cancel adding project and activates the submit button
    const addProjectSubmission = ()=>{
        DOMManip.getElement("#add-project-button").removeEventListener("click", DOMManip.setupNewProject);
        DOMManip.getElement("#add-project-button").addEventListener("click", DOMManip.cancelNewProject);
        DOMManip.getElement("#new-proj-add-button").addEventListener("click", projectFunctions.addProject);
    };

    //clicking the Today header or any of the tasks for today brings up the Today page
    const activateToday = ()=>{
        DOMManip.getElement("#todays-todo-side").addEventListener("click", DOMManip.showToday);
        DOMManip.getElements(".task-side-label.today").forEach(ele => ele.addEventListener("click", DOMManip.showToday));
    };
    const activateOverdue = ()=>{
        DOMManip.getElement("#overdue-todo-side").addEventListener("click", DOMManip.showOverdue);
        DOMManip.getElements(".task-side-label.overdue").forEach(ele => ele.addEventListener("click", DOMManip.showOverdue));
    };
    //makes the projects clickable, maintains only one action listener on each project
    const activateProjects = ()=>{
        DOMManip.getElements(".project-side-label").forEach(ele=>ele.removeEventListener("click", DOMManip.showProject));
        DOMManip.getElements(".project-side-label").forEach(ele=>ele.addEventListener("click", DOMManip.showProject));
    };
    //turns on all side panel pages
    const activateSides = ()=>{
        activateToday();
        activateOverdue();
        activateProjects();
    };
    //activates the edit project buttons
    const activateProjectButtons = ()=>{
        DOMManip.getElement(".edit-button.title").addEventListener("click", DOMManip.displayEditProject);
        DOMManip.getElement(".edit-button.delete").addEventListener("click", DOMManip.displayDeleteProject);
    };
    //activates the cancel project-edit button
    const activateCancelButton =(button)=>{
        button.addEventListener("click", DOMManip.cancelProjectEdit);

    };
    //changes the project title edit into the confirm button
    const activateConfirmProjectEdit = button=>{
        button.removeEventListener("click", DOMManip.displayEditProject);
        button.addEventListener("click", projectFunctions.confirmProjectEdit);
    };
    //activates the delete project button
    const activateDeleteProject = button=>{
        button.addEventListener("click",projectFunctions.deleteProject);
    };

    //activates the add new task button
    const activateAddTaskButton = ()=>{
        DOMManip.getElement("#add-task-button").addEventListener("click", projectFunctions.addTask);
    };
    //activates the edit task button for that specific task
    const activateEditButton = button=>{
        button.removeEventListener("click", projectFunctions.confirmTaskEdit);
        button.addEventListener("click", DOMManip.displayEditTask);
    };
    //makes the task's check box clickable to mark tasks as complete
    const activateCheckbox = index=>{
        DOMManip.getElements(".task-checkbox")[index].addEventListener("click", projectFunctions.toggleTaskComplete);
    };
    //changes the button to edit a task into a confirmation button and activates the cancel button
    const activateConfirmTaskEdit = button=>{
        button.removeEventListener("click", DOMManip.displayEditTask);
        button.addEventListener("click", projectFunctions.confirmTaskEdit);
        button.parentElement.lastElementChild.addEventListener("click", DOMManip.cancelEdit);

    };

    return{ activateAddButton, initStartingListeners, addProjectSubmission,activateToday, activateProjects, activateOverdue,
            activateSides, clearTextBox, activateProjectButtons, activateAddTaskButton, activateCheckbox,
            activateEditButton, activateConfirmProjectEdit, activateConfirmTaskEdit, activateCancelButton, activateDeleteProject};
})();



export default EventHandler;