import './style.css'
import DOMManip from './DOMManip';
import EventHandler from './EventHandler';
import Task from './Task.js'
import { Project } from './Project';

const fixAnim = (()=>{
    setTimeout(()=> {
        const hoverable = DOMManip.getElements(".make-hoverable")
        hoverable.forEach(ele => {
            ele.classList.add('hoverable');
            ele.classList.remove('make-hoverable')})}, 1);
})();

const projectFunctions = (()=>{

    const _allProjects = [];

    const addProject = ()=>{
        const newProjTitle = DOMManip.getElement('#new-proj-input').value;
        _allProjects.push(new Project(newProjTitle));
        DOMManip.removeElement("#new-proj-input-container");
        EventHandler.activateAddButton();
        DOMManip.toggleActive('#add-project-button');
        DOMManip.toggleActive('#add-project-button-text');
        
    }

    return{addProject, _allProjects}

})();



const runDisplay = (()=>{
    EventHandler.initStartingListeners();

})();

export {projectFunctions};

