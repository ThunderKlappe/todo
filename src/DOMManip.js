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
    
    const _makeNewElement = (type, id='', HTMLClass = '', text = '', ...attributes) =>{
        const newElem = document.createElement(type);
        if(id != ''){
            newElem.setAttribute("id", id);
        }
        if(HTMLClass != ''){
            newElem.setAttribute('class', HTMLClass);
        }
        newElem.textContent = text;
        if(attributes.length > 0){
            attributes.forEach(att => newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]))
        }
    
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
        const newProjInput = _makeNewElement('input', 'new-proj-input', '','',
            {type:'text'}, {value:'Project Title'} );
        const newProjAddButton = _makeNewElement('button', 'new-proj-add-button', 'add-button', 'Submit');

        newProjInputContainer.appendChild(newProjInput);
        newProjInputContainer.appendChild(newProjAddButton);

        getElement('#add-project-button-container').appendChild(newProjInputContainer);

        EventHandler.addProjectSubmission();
    }
    const cancelNewProject = ()=>{
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _removeElement("#new-proj-input-container");
        EventHandler.activateAddButton();

    }

    const getNewProjTitle = ()=>{
        return DOMManip.getElement('#new-proj-input').value;
    }
    
    const _removeSubEntries = (element)=>{
        for(let i = element.childNodes.length; i > 2; i--){
            element.childNodes[i-1].remove();
        }
    }
    const _revealArray = (parent, array, type)=>{
        _removeSubEntries(parent);
        array.forEach((proj, index)=> parent.appendChild(
            _makeNewElement('div', `${type}-${index}`, `${type}-side-label`, proj.getTitle(), {'data-index': `${index}`})))
    }

    const addProjectToList = ()=>{
        _removeElement("#new-proj-input-container");
        EventHandler.activateAddButton();
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _revealArray(getElement('#projects-side').parentElement, projectFunctions.getAllProjects(), 'project');
        EventHandler.activateProjects();
    }

    const expandToggle = (e)=>{
        let array = [];
        let type = '';
        if(e.target.parentElement.id == 'projects-side')
        {
            array = projectFunctions.getAllProjects();
            type = 'project';
        }
        if(e.target.classList.contains('closed')){
            e.target.classList.remove('closed')
            _revealArray(e.target.parentElement.parentElement, array, type);
        }else{
            e.target.classList.add('closed');
            _removeSubEntries(e.target.parentElement.parentElement)
        }

    }
    const showProject = (e)=>{
        const mainDisplay = getElement('#main-display');
        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }
        const projectContainer = _makeNewElement('div', `project-${e.target.id.charAt(e.target.id.length-1)}-container`, 'project-container');
        const projectTitle = _makeNewElement('div', `project-${e.target.dataset.index}-title`, 'project-title', `${projectFunctions.getAllProjects()[e.target.dataset.index].getTitle()}`)
        projectContainer.appendChild(projectTitle);
        mainDisplay.appendChild(projectContainer);
    }

    return {getElement, getElements, fixStartingAnimations, setupNewProject, cancelNewProject,
         getNewProjTitle, addProjectToList, expandToggle, showProject}
})();

export default DOMManip;