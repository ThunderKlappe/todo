import EventHandler from "./EventHandler";

const DOMManip = (()=>{
    const getElement = (selector)=>document.querySelector(selector)
    const getElements = (selector)=>document.querySelectorAll(selector)
    
    const makeNewElement = (type, id='', HTMLClass = '', text = '') =>{
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
    const removeElement = (elementID) =>{
        getElement(elementID).remove();
    }
    const toggleActive = (elementID) =>{
        const element = getElement(elementID)
        element.classList.contains('active')? element.classList.remove('active') : element.classList.add('active');
    }

    const setupNewProject = ()=>{
        toggleActive('#add-project-button');
        toggleActive('#add-project-button-text');
        const newProjInputContainer = makeNewElement('div', 'new-proj-input-container');
        const newProjInput = makeNewElement('input', 'new-proj-input');
        newProjInput.setAttribute('type', 'text')
        newProjInput.setAttribute('value', 'Project Title')
        const newProjAddButton = makeNewElement('button', 'new-proj-add-button', 'add-button', 'Submit');

        newProjInputContainer.appendChild(newProjInput);
        newProjInputContainer.appendChild(newProjAddButton);

        getElement('#add-project-button-container').appendChild(newProjInputContainer);

        EventHandler.addProjectSubmission();
    }

    return {makeNewElement, removeElement, toggleActive, getElement, getElements, setupNewProject}
})();

export default DOMManip;