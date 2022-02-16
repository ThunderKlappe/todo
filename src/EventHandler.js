import DOMManip from "./DOMManip";
import { projectFunctions } from "./index.js";

const EventHandler = (()=>{
    const activateAddButton = ()=>{
        DOMManip.getElement("#add-project-button").addEventListener('click', DOMManip.setupNewProject);
    }

    const initStartingListeners = ()=>{
        activateAddButton();
        DOMManip.getElements('.dropdown-toggle').addEventListener('click', expandToggle);
    }

    const addProjectSubmission = ()=>{
        DOMManip.getElement("#add-project-button").removeEventListener('click', DOMManip.setupNewProject);
        DOMManip.getElement('#new-proj-add-button').addEventListener('click', projectFunctions.addProject);
    }
    return{activateAddButton, initStartingListeners, addProjectSubmission}
})();



export default EventHandler;