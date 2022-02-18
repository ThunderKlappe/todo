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
    const _displayErrors = (e, input, type)=>{
        input.forEach(ele=>{
            const error = _makeNewElement('div','','error-message', ele)
            const parent = e.currentTarget.parentElement
            parent.parentElement.insertBefore(error, parent);
            setTimeout(()=>error.style.opacity = 0, 2000);
            setTimeout(()=>error.remove(), 4000);
        })
    }
    const _toggleActive = (elementID) =>{
        const element = getElement(elementID)
        element.classList.contains('active')? element.classList.remove('active') : element.classList.add('active');
    }

    const setupNewProject = ()=>{
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        const newProjInputContainer = _makeNewElement('div', 'new-proj-input-container', 'input-container');
        const newProjInput = _makeNewElement('input', 'new-proj-input', '','',{type:'text'}, {value:'Project Title'} );
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

    const getNewProjInfo = ()=>{
        return {title:DOMManip.getElement('#new-proj-input').value};
    }
    
    const checkNewProject = (e, project)=>{
        let errorMessages = [];
        if(project.title == ''){
            errorMessages.push('Please enter a title for the project');
        }
        if(errorMessages.length > 0){
            _displayErrors(e, errorMessages, 'project');
            return false;
        }else{
            return true;
        }

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
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _revealArray(getElement('#projects-side').parentElement, projectFunctions.getAllProjects(), 'project');
        EventHandler.activateAddButton();
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

    const _markSelectedProject = (e)=>{
        getElements(".project-side-label").forEach(ele=>ele.classList.remove('selected'));
        e.target.classList.add('selected');
    }

    const _displayTaskInput = ()=>{
        const projectContainer = getElement('.project-container');
        const addTaskContainer = _makeNewElement('div', 'add-task-container', 'input-container');
        const addTaskName = _makeNewElement('input', 'add-task-name-input', 'add-task-info','',{type:'text'}, {value:'Task Name'});
        const addTaskDescription = _makeNewElement('input', 'add-task-description-input', 'add-task-info','',{type:'text'}, {value:'Task Description'});
        const addTaskDate = _makeNewElement('input', 'add-task-date-input', 'add-task-info','Due Date',{type:'date'});
        const addTaskPriority = _makeNewElement('select', 'add-task-priority-input', 'add-task-info','');
        const addTaskPriorityDefault = _makeNewElement('option','','','Priority', {value:0} );
        const addTaskPriorityLow = _makeNewElement('option','','','Low', {value:'Low'},{style:'background-color:#E1ADAD'});
        const addTaskPriorityMedium = _makeNewElement('option','','','Medium', {value:"Medium"}, {style:'background-color:#EFEF38'});
        const addTaskPriorityHigh = _makeNewElement('option','','','High', {value:"High"}, {style:'background-color:#9DCD8D'});
        const addTaskButton = _makeNewElement('button', 'add-task-button', 'add-button', 'Add New Task');

        addTaskPriority.appendChild(addTaskPriorityDefault);
        addTaskPriority.appendChild(addTaskPriorityLow);
        addTaskPriority.appendChild(addTaskPriorityMedium);
        addTaskPriority.appendChild(addTaskPriorityHigh);

        addTaskContainer.appendChild(addTaskName);
        addTaskContainer.appendChild(addTaskDescription);
        addTaskContainer.appendChild(addTaskDate);
        addTaskContainer.appendChild(addTaskPriority);
        addTaskContainer.appendChild(addTaskButton);

        projectContainer.appendChild(addTaskContainer);
        
        EventHandler.activateAddTaskButton();
    }
    const showProject = (e)=>{
        _markSelectedProject(e);
        const mainDisplay = getElement('#main-display');

        //this can get removed after Today's Tasks is working
        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }
        //*****

        const projectContainer = _makeNewElement('div', `project-${e.target.id.charAt(e.target.id.length-1)}-container`, 'project-container');
        const projectTitle = _makeNewElement('div', `project-${e.target.dataset.index}-title`, 'project-title', `${projectFunctions.getAllProjects()[e.target.dataset.index].getTitle()}`)
        const tasksContainer = _makeNewElement('div', `project-${e.target.dataset.index}-tasks-container`, 'tasks-container');
        const tasksWrapper = _makeNewElement('div', `project-${e.target.dataset.index}-tasks-wrapper`, 'tasks-wrapper')
        projectContainer.appendChild(projectTitle);
        tasksWrapper.appendChild(tasksContainer)
        projectContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(projectContainer);
        _displayTaskInput();
    }

    const getTaskInfo = (index)=>{
        let formInfo;
        const projectNumber = getElement('.selected').dataset.index;
        if(index == undefined){
            formInfo = getElements('.add-task-info');
        }else{
            formInfo = getElements(`#project-${projectNumber}-task-${index}-container .edit-task-info`)
        }
        return {name:formInfo[0].value,
                description: formInfo[1].value,
                date: formInfo[2].value,
                priority: formInfo[3].value,
                project: projectNumber}
        
    }

    const checkNewTask = (e, task)=>{
        let errorMessages = [];
        if(task.name == ''){
            errorMessages.push('Please enter a name for the task');
        }
        if(task.description == ''){
            errorMessages.push('Please enter a description for the task');
        }
        if(task.date == ''){
            errorMessages.push('Please enter a due date for the task');
        }
        if(task.priority == 0){
            errorMessages.push('Please enter a priority level for the task');
        }

        if(errorMessages.length > 0){
            _displayErrors(e, errorMessages, 'task');
            return false;
        }else{
            return true;
        }

    }

    const addTaskToList = ()=>{
        const tasksContainer = getElement('.tasks-container');
        const projectNumber = getElement('.selected').dataset.index;
        const taskNumber = projectFunctions.getAllProjects()[projectNumber].tasks.length-1;
        const newTask = projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        getElement('#add-task-container').remove();
        const newTaskContainer = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-container`, 'task-container', '', {'data-priority':newTask.getPriority()},{"data-task":taskNumber});
        const newTaskCheckbox = _makeNewElement('input', `project-${projectNumber}-task-${taskNumber}-checkbox`, 'task-checkbox', '', {type:'checkbox'}, {'data-project':projectNumber}, {'data-task':taskNumber});
        const newTaskName = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-name`, 'task-name task-info', newTask.getName());
        const newTaskDescription = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-description`, 'task-description task-info', newTask.getDescription());
        const newTaskDate = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-date`, 'task-date task-info', newTask.getDate());
        const newTaskEditButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-button`, 'task-button');
        const newTaskEditIcon = _makeNewElement('i', '', 'fa-solid fa-pencil edit-icon');
        const newTaskEditText =_makeNewElement('span', '', 'edit-text', 'Edit Task')

        newTaskContainer.appendChild(newTaskCheckbox);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDescription);
        newTaskContainer.appendChild(newTaskDate);
        newTaskEditButton.appendChild(newTaskEditIcon);
        newTaskEditButton.appendChild(newTaskEditText);
        newTaskContainer.appendChild(newTaskEditButton);
        tasksContainer.appendChild(newTaskContainer);
        EventHandler.activateEditButton(newTaskEditButton);

        _displayTaskInput();
    }

    const displayEditTask = e=>{
        const editButton = e.currentTarget;
        const projectNumber = getElement('.selected').dataset.index;
        const taskNumber = editButton.parentElement.dataset.task;
        const editTask = projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        const editTaskName = _makeNewElement('input', 'edit-task-name-input', 'edit-task-info','',{type:'text'}, {value:editTask.getName()});
        const editTaskDescription = _makeNewElement('input', 'edit-task-description-input', 'edit-task-info','',{type:'text'}, {value:editTask.getDescription()});
        const editTaskDate = _makeNewElement('input', 'edit-task-date-input', 'edit-task-info','Due Date',{type:'date'}, {value:editTask.getDate()});
        const editTaskPriority = _makeNewElement('select', 'edit-task-priority-input', 'edit-task-info','');
        const editTaskPriorityLow = _makeNewElement('option','','','Low', {value:'Low'},{style:'background-color:#E1ADAD'});
        const editTaskPriorityMedium = _makeNewElement('option','','','Medium', {value:"Medium"}, {style:'background-color:#EFEF38'});
        const editTaskPriorityHigh = _makeNewElement('option','','','High', {value:"High"}, {style:'background-color:#9DCD8D'});
        
        if(editTask.getPriority() == 'Low'){
            editTaskPriorityLow.setAttribute('selected', 'selected')
        }else if(editTask.getPriority() == 'Medium'){
            editTaskPriorityMedium.setAttribute('selected', 'selected')
        }else if(editTask.getPriority() == 'High'){
            editTaskPriorityHigh.setAttribute('selected', 'selected')
        }
        getElements(`#project-${projectNumber}-task-${taskNumber}-container .task-info`).forEach(ele=>ele.remove())

        editTaskPriority.appendChild(editTaskPriorityLow);
        editTaskPriority.appendChild(editTaskPriorityMedium);
        editTaskPriority.appendChild(editTaskPriorityHigh);

        const editCancelButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-cancel-button`, 'task-button');
        const editCancelIcon = _makeNewElement('i', '', 'fa-solid fa-xmark edit-cancel-icon');
        const editCancelText =_makeNewElement('span', '', 'edit-cancel-text', 'Cancel')

        editCancelButton.appendChild(editCancelIcon);
        editCancelButton.appendChild(editCancelText);

        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`)
        editTaskContainer.insertBefore(editTaskName, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(editTaskDescription, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(editTaskDate, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(editTaskPriority, editTaskContainer.lastElementChild);
        editTaskContainer.appendChild(editCancelButton);

        editButton.firstElementChild.classList.remove('fa-pencil');
        editButton.firstElementChild.classList.add('fa-check');
        editButton.lastElementChild.textContent = "Confirm";

        EventHandler.activateConfirmEdit(editButton);

    }

    const updateTaskList = (taskNumber)=>{
        const projectNumber = getElement('.selected').dataset.index;
        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`)
        const editFields = getElements(`#project-${projectNumber}-task-${taskNumber}-container .edit-task-info`)
        const updatedTask = projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];
        const editButton = getElement(`#project-${projectNumber}-task-${taskNumber}-edit-button`);
        editFields.forEach(ele=>ele.remove());

        const updatedTaskName = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-name`, 'task-name task-info', updatedTask.getName());
        const updatedTaskDescription = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-description`, 'task-description task-info', updatedTask.getDescription());
        const updatedTaskDate = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-date`, 'task-date task-info', updatedTask.getDate());

        editTaskContainer.lastElementChild.remove();
        editTaskContainer.insertBefore(updatedTaskName, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(updatedTaskDescription, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(updatedTaskDate, editTaskContainer.lastElementChild);
        
        editTaskContainer.setAttribute('data-priority', updatedTask.getPriority())

        editButton.firstElementChild.classList.remove('fa-check');
        editButton.firstElementChild.classList.add('fa-pencil');
        editButton.lastElementChild.textContent = "Edit Task";

        EventHandler.activateEditButton(editButton);
    }

    const cancelEdit = (e)=>{

    }

    return {getElement, getElements, fixStartingAnimations,checkNewProject, setupNewProject, cancelNewProject,
         getNewProjInfo, addProjectToList, expandToggle, showProject, getTaskInfo, checkNewTask, 
         addTaskToList, displayEditTask, updateTaskList, cancelEdit}
})();

export default DOMManip;