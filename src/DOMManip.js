import { projectFunctions } from ".";
import EventHandler from "./EventHandler";

const DOMManip = (()=>{
    const getElement = (selector)=>document.querySelector(selector)
    const getElements = (selector)=>document.querySelectorAll(selector)

    const fixStartingAnimations = ()=>{
        const hoverable = getElements(".make-hoverable")
        hoverable.forEach(ele => {
            ele.classList.add('hoverable');
            ele.classList.remove('make-hoverable')})
    }
    
    const _makeNewElement = (type, id='', HTMLClass = '', text = '') =>{
        const newElem = document.createElement(type);
        if(id != ''){
            newElem.setAttribute("id", id);
        }
        if(HTMLClass != ''){
            newElem.setAttribute('class', HTMLClass);
        }
        newElem.textContent = text;
    
        return newElem;
    }
    const _removeElement = (elementID) =>{
        getElement(elementID).remove();
    }
    const _toggleActive = (elementID) =>{
        const element = getElement(elementID)
        element.classList.contains('active')? element.classList.remove('active') : element.classList.add('active');
    }

    const setupNewProject = ()=>{
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        const newProjInputContainer = _makeNewElement('div', 'new-proj-input-container');
        const newProjInput = _makeNewElement('input', 'new-proj-input');
        newProjInput.setAttribute('type', 'text')
        newProjInput.setAttribute('value', 'Project Title')
        const newProjAddButton = _makeNewElement('button', 'new-proj-add-button', 'add-button', 'Submit');

        newProjInputContainer.appendChild(newProjInput);
        newProjInputContainer.appendChild(newProjAddButton);

        getElement('#add-project-button-container').appendChild(newProjInputContainer);

        EventHandler.addProjectSubmission();
    }
    const getNewProjTitle = ()=>{
        return DOMManip.getElement('#new-proj-input').value;
    }
    
    const _removeSubEntries = (element)=>{
        for(let i = element.childNodes.length; i > 2; i--){
            element.childNodes[i-1].remove();
        }
    }
    const _updateProjects = ()=>{
        const projectTab = getElement('#projects-side');
        _removeSubEntries(projectTab);
        projectFunctions.getAllProjects().forEach((proj, index)=> projectTab.appendChild(
            _makeNewElement('div', `project-${index}`, 'project-side-label', proj.getTitle())))
    }

    const addProjectToList = ()=>{
        _removeElement("#new-proj-input-container");
        EventHandler.activateAddButton();
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _updateProjects();
    }

    const expandToggle = (e)=>{

    }

    return {getElement, getElements, fixStartingAnimations, setupNewProject, getNewProjTitle, 
            addProjectToList, expandToggle}
})();

export default DOMManip;