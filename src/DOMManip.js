import { projectFunctions } from ".";
import EventHandler from "./EventHandler";
import { toDate, format, parseISO, subDays, isToday, parse } from "date-fns";

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
        getElement("#new-proj-input-container").remove();
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


    const _removeAllChildren = (element)=>{
        for(let i = element.childNodes.length; i > 0; i--){
            element.childNodes[i-1].remove();
        }
    }

    const _removeSubElements = (element)=>{
        for(let i = element.childNodes.length; i > 2; i--){
            element.childNodes[i-1].remove();
        }
    }
    const _revealArray = (parent, array, type)=>{
        _removeSubElements(parent);
        array.forEach((proj, index)=> parent.appendChild(
            _makeNewElement('div', `${type}-${index}`, `${type}-side-label ${(type=='project' && proj.isSelected())?'selected' : ''}`, proj.getTitle(), {'data-index': `${index}`}, )))
    }

    const displayProjects = ()=>{
        _revealArray(getElement('#projects-side').parentElement, projectFunctions.getAllProjects(), 'project');
    }

    const _displayTitle = ()=>{
        const projectNumber = _getProjectNumber();
        const currentProject = projectFunctions.getAllProjects()[projectNumber];
        const titleWrapper = getElement('.project-title-wrapper');
        const titleButtonContainer = _makeNewElement('div', `project-${projectNumber}-title-button-container`, 'button-container project');
        const projectTitle = _makeNewElement('div', `project-${projectNumber}-title`, 'project-title', `${currentProject.getTitle()}`);
        
        const editTitleButton = _makeNewElement('button', `project-${projectNumber}-edit-button`, 'edit-button title');
        const editTitleIcon = _makeNewElement('i', '', 'fa-solid fa-pencil edit-icon');
        const editTitleText =_makeNewElement('span', '', 'edit-text', 'Edit Title')
        editTitleButton.appendChild(editTitleIcon);
        editTitleButton.appendChild(editTitleText);

        const deleteProjectButton = _makeNewElement('button', `project-${projectNumber}-delete-button`, 'edit-button delete');
        const deleteProjectIcon = _makeNewElement('i', '', 'fa-solid fa-trash edit-icon');
        const deleteProjectText =_makeNewElement('span', '', 'edit-text', 'Delete Project')
        deleteProjectButton.appendChild(deleteProjectIcon);
        deleteProjectButton.appendChild(deleteProjectText);

        titleButtonContainer.appendChild(editTitleButton)
        titleButtonContainer.appendChild(deleteProjectButton)

        if(titleWrapper.childNodes.length >0){
            _removeAllChildren(titleWrapper)
        }
        titleWrapper.appendChild(projectTitle);
        titleWrapper.appendChild(titleButtonContainer);
    }
    const updateProjectList = ()=>{
        if(getElement('#new-proj-input-container')){
            getElement("#new-proj-input-container").remove();
            _toggleActive('#add-project-button');
            _toggleActive('#add-project-button-text');
        }
        if(getElement('.title-edit')){
            _displayTitle()
            EventHandler.activateProjectButtons();
        }
        
        displayProjects();
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
            EventHandler.activateSides();
        }else{
            e.target.classList.add('closed');
            _removeSubElements(e.target.parentElement.parentElement)
        }

    }

    const _markSelectedProject = (e)=>{
        if(e){
            getElements(".project-side-label").forEach(ele=>ele.classList.remove('selected'));
            projectFunctions.getAllProjects().forEach(proj => proj.markSelected(false));
            projectFunctions.getAllProjects()[e.target.dataset.index].markSelected(true);
            e.target.classList.add('selected');
        }else{
            getElements(".project-side-label").forEach(ele=>ele.classList.remove('selected'));
            projectFunctions.getAllProjects().forEach(proj => proj.markSelected(false));
            projectFunctions.getAllProjects()[0].markSelected(true);
            getElements('.project-side-label')[0].classList.add('selected');
        }
    }

    const _displayTaskInput = ()=>{
        const projectContainer = getElement('.project-container');
        const addTaskContainer = _makeNewElement('div', 'add-task-container', 'input-container');
        const addTaskName = _makeNewElement('input', 'add-task-name-input', 'add-task-info','',{type:'text'}, {value:'Task Name'});
        const addTaskDescription = _makeNewElement('input', 'add-task-description-input', 'add-task-info','',{type:'text'}, {value:'Task Description'});
        const addTaskDate = _makeNewElement('input', 'add-task-date-input', 'add-task-info','Due Date',{type:'date'},{min:subDays(new Date(), 1).toISOString().split('T')[0]});
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
    
    const _getProjectNumber = ()=>{
        return getElement('.selected').dataset.index;

    }

    const getTaskInfo = (index)=>{
        let formInfo;
        let taskNumber;
        const projectNumber = _getProjectNumber();
        if(index == undefined){
            formInfo = getElements('.add-task-info');
            taskNumber = projectFunctions.getAllProjects()[projectNumber].tasks.length;
        }else{
            formInfo = getElements(`#project-${projectNumber}-task-${index}-container .edit-task-info`)
            taskNumber = index;
        }
        return {name:formInfo[0].value,
                description: formInfo[1].value,
                date: (formInfo[2].value ? format(toDate(parseISO(formInfo[2].value)),'MM/dd/yyyy') : ''),
                priority: formInfo[3].value,
                project: projectNumber,
                number:taskNumber
            }
        
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

    const _insertAfter = (newNode, existingNode)=> {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    const _fillInTask = (task, taskNumber, index)=>{
        const projectNumber = task.getProject();
        const tasksContainer = getElement('.tasks-container');

        const newTaskContainer = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-container`, 'task-container', '', {'data-priority':task.getPriority()},{"data-task":taskNumber});
        const newTaskCheckbox = _makeNewElement('input', `project-${projectNumber}-task-${taskNumber}-checkbox`, 'task-checkbox', '', {type:'checkbox'}, {'data-project':projectNumber}, {'data-task':taskNumber});
        const newTaskName = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-name`, 'task-name task-info', task.getName());
        const newTaskDescription = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-description`, 'task-description task-info', task.getDescription());
        const newTaskDate = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-date`, 'task-date task-info', task.getDate());
        const newTaskEditButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-button`, 'edit-button');
        const newTaskEditIcon = _makeNewElement('i', '', 'fa-solid fa-pencil edit-icon');
        const newTaskEditText =_makeNewElement('span', '', 'edit-text', 'Edit Task')

        newTaskContainer.appendChild(newTaskCheckbox);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDescription);
        newTaskContainer.appendChild(newTaskDate);
        newTaskEditButton.appendChild(newTaskEditIcon);
        newTaskEditButton.appendChild(newTaskEditText);
        newTaskContainer.appendChild(newTaskEditButton);
        _insertAfter(newTaskContainer,tasksContainer.childNodes[index]);
        EventHandler.activateEditButton(newTaskEditButton);
    }

    const updateTaskList = (taskNumber)=>{
        const projectNumber = _getProjectNumber();
        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`)
        const updatedTask = projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];
        editTaskContainer.remove()
        _fillInTask(updatedTask, taskNumber, taskNumber)
    }

    const addTaskToList = ()=>{
        const projectNumber = _getProjectNumber();
        const taskNumber = projectFunctions.getAllProjects()[projectNumber].tasks.length-1;
        const newTask = projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        getElement('#add-task-container').remove();
        _fillInTask(newTask, taskNumber, taskNumber);
        _displayTaskInput();
    }

    const _displayConfirmCancel = ()=>{
        const projectButtonContainer = getElement('.button-container');
        const projectNumber = _getProjectNumber();
        const confirmContainer = _makeNewElement('div', `project-${projectNumber}-delete-button-container`, 'button-container concan');
       
        const confirmProjectButton = _makeNewElement('button', `project-${projectNumber}-confirm-delete-button`, 'edit-button confirm');
        const confirmProjectIcon = _makeNewElement('i', '', 'fa-solid fa-check edit-icon');
        const confirmProjectText =_makeNewElement('span', '', 'edit-text', 'Confirm')
        confirmProjectButton.appendChild(confirmProjectIcon);
        confirmProjectButton.appendChild(confirmProjectText);

        const cancelProjectButton = _makeNewElement('button', `project-${projectNumber}-cancel-delete-button`, 'edit-button cancel');
        const cancelProjectIcon = _makeNewElement('i', '', 'fa-solid fa-xmark edit-icon');
        const cancelProjectText =_makeNewElement('span', '', 'edit-text', 'Cancel')
        cancelProjectButton.appendChild(cancelProjectIcon);
        cancelProjectButton.appendChild(cancelProjectText);

        confirmContainer.appendChild(confirmProjectButton);
        confirmContainer.appendChild(cancelProjectButton);

        projectButtonContainer.appendChild(confirmContainer);
    }

    const displayEditProject = (e)=>{
        const projectNumber = _getProjectNumber();
        const projecTitle = projectFunctions.getAllProjects()[projectNumber].getTitle();
        const titleWrapper = getElement('.project-title-wrapper');

        const projectTitleInput = _makeNewElement('input', `project-${projectNumber}-title-input`, 'title-edit', '', {type:'text'}, {value:projecTitle}, {'data-project':projectNumber});
        titleWrapper.insertBefore(projectTitleInput, titleWrapper.lastElementChild);
        titleWrapper.firstElementChild.remove();

        const projectButtonContainer = getElement('.button-container');
        _removeAllChildren(projectButtonContainer);

        _displayConfirmCancel();
        
        EventHandler.activateConfirmProjectEdit(getElement('.edit-button.confirm'));
        EventHandler.activateCancelButton(getElement('.edit-button.cancel'))
    }
    const displayDeleteProject= ()=>{
        const projectNumber = _getProjectNumber()
        const projectButtonContainer = getElement('.button-container');
        _removeAllChildren(projectButtonContainer);

        _displayConfirmCancel();

        EventHandler.activateDeleteProject(getElement('.edit-button.confirm'));
        EventHandler.activateCancelButton(getElement('.edit-button.cancel'))

    }
    const cancelProjectEdit = ()=>{
        const titleWrapper = getElement('.project-title-wrapper')
        _displayTitle();
        EventHandler.activateProjectButtons();
    }

    const cancelEdit = (e)=>{
        const task = e.currentTarget.parentElement.dataset.task;
        updateTaskList(task);
    }

    const displayEditTask = e=>{
        const editButton = e.currentTarget;
        const projectNumber = _getProjectNumber()
        const taskNumber = editButton.parentElement.dataset.task;
        const editTask = projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        const editTaskName = _makeNewElement('input', 'edit-task-name-input', 'edit-task-info','',{type:'text'}, {value:editTask.getName()});
        const editTaskDescription = _makeNewElement('input', 'edit-task-description-input', 'edit-task-info','',{type:'text'}, {value:editTask.getDescription()});
        const editTaskDate = _makeNewElement('input', 'edit-task-date-input', 'edit-task-info','Due Date',{type:'date'}, {value:new Date(editTask.getDate()).toISOString().split('T')[0]}, {min:subDays(new Date(), 1).toISOString().split('T')[0]});
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

        const editCancelButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-cancel-button`, 'edit-button');
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

        EventHandler.activateConfirmTaskEdit(editButton);

    }

    const showProject = (e)=>{
        _markSelectedProject(e);
        const mainDisplay = getElement('#main-display');

        //this can get removed after Today's Tasks is working
        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }
        //*****

        const projectNumber = _getProjectNumber();
        const currentProject = projectFunctions.getAllProjects()[projectNumber];

        const projectContainer = _makeNewElement('div', `project-${projectNumber}-container`, 'project-container');
        const projectTitleWrapper = _makeNewElement('div' , `project-${projectNumber}-title-wrapper`, 'project-title-wrapper');
        const tasksContainer = _makeNewElement('div', `project-${projectNumber}-tasks-container`, 'tasks-container');
        const tasksWrapper = _makeNewElement('div', `project-${projectNumber}-tasks-wrapper`, 'tasks-wrapper')
        const spacer = _makeNewElement('div');
        projectContainer.appendChild(projectTitleWrapper);
        tasksContainer.appendChild(spacer);
        tasksWrapper.appendChild(tasksContainer)
        projectContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(projectContainer);
        _displayTitle();
        EventHandler.activateProjectButtons();
        currentProject.tasks.forEach((task, index) => _fillInTask(task, index, index))
        _displayTaskInput();
    }

    const _getTodaysTasks = ()=>{
        let todaysTasks = [];
        projectFunctions.getAllProjects().forEach(proj=>{            
            proj.tasks.forEach(task=>{
                if(isToday(parse (task.getDate(), 'MM/dd/yyyy', new Date() ))){
                    todaysTasks.push(task)
                };
            })
        })
        return todaysTasks;
    }

    const showToday = ()=>{
        const todaysTasks = _getTodaysTasks();
        const today = format(toDate(new Date()),'MM/dd/yyyy');
        const mainDisplay = getElement('#main-display');

        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }

        const todayContainer = _makeNewElement('div', 'today-container', "project-container");
        const todayTitle = _makeNewElement('div', 'today-title', 'project-title', `Today: ${today}`);
        
        const tasksContainer = _makeNewElement('div', `todays-tasks-container`, 'tasks-container');
        const tasksWrapper = _makeNewElement('div', `todays-tasks-wrapper`, 'tasks-wrapper')
        const spacer = _makeNewElement('div');
        todayContainer.appendChild(todayTitle);
        tasksContainer.appendChild(spacer);
        tasksWrapper.appendChild(tasksContainer)
        todayContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(todayContainer);
    

        todaysTasks.forEach((task, index)=>{
            //console.log(task, task.getName(), task.name, task.number, task.getNumber());
           _fillInTask(task, task.getNumber(), index)
        });
        
        
    }

    return {getElement, getElements, fixStartingAnimations,checkNewProject, setupNewProject, cancelNewProject,
         getNewProjInfo, updateProjectList, expandToggle, showProject, displayDeleteProject,
          getTaskInfo, checkNewTask, addTaskToList, displayEditProject, displayEditTask, 
          updateTaskList, cancelEdit, displayProjects, cancelProjectEdit, showToday}
})();

export default DOMManip;