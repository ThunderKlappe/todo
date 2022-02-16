import { projectFunctions } from ".";
import EventHandler from "./EventHandler";

const DOMManip = (()=>{
    const getElement = (selector)=>document.querySelector(selector)
    const getElements = (selector)=>document.querySelectorAll(selector)

    const fixStartingAnimations = ()=>{
        const animatable = getElements(".fix-anim")
        animatable.forEach(ele => {
            ele.classList.add('anim');
            ele.classList.remove('fix-anim')})
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
    const _revealArray = (parent, array)=>{
        _removeSubEntries(parent);
        array.forEach((proj, index)=> parent.appendChild(
            _makeNewElement('div', `project-${index}`, 'project-side-label', proj.getTitle())))
    }

    const addProjectToList = ()=>{
        _removeElement("#new-proj-input-container");
        EventHandler.activateAddButton();
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _revealArray(getElement('#projects-side').parentElement, projectFunctions.getAllProjects());
    }

    const expandToggle = (e)=>{
        let array = [];
        if(e.target.parentElement.id == 'projects-side')
        {
            array = projectFunctions.getAllProjects();
        }
        if(e.target.classList.contains('closed')){
            e.target.classList.remove('closed')
            _revealArray(e.target.parentElement.parentElement, array);
        }else{
            e.target.classList.add('closed');
            _removeSubEntries(e.target.parentElement.parentElement)
        }

    }

    return {getElement, getElements, fixStartingAnimations, setupNewProject, getNewProjTitle, 
            addProjectToList, expandToggle}
})();

export default DOMManip;