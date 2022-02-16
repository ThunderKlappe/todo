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
    return{activateAddButton, initStartingListeners, addProjectSubmission}
})();



export default EventHandler;