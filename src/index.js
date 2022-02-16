import './style.css'
import DOMManip from './DOMManip';
import EventHandler from './EventHandler';
import Task from './Task.js'
import { Project } from './Project';

const projectFunctions = (()=>{

    const _allProjects = [];

    const addProject = ()=>{
        const newProjTitle = DOMManip.getNewProjTitle();
        _allProjects.push(new Project(newProjTitle));
        DOMManip.addProjectToList();
    }

    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }

    return{addProject, getAllProjects}

})();

const initWebsite = (()=>{
    setTimeout(()=> DOMManip.fixStartingAnimations, 1);
    EventHandler.initStartingListeners();
})();

export {projectFunctions};

