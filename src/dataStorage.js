import { projectFunctions } from "./index.js";
import { Project } from "./Project.js";
import Task from "./Task.js";


const dataStorage = (()=>{
    const saveData = ()=>{
        const allProj = projectFunctions.getAllProjects()
        localStorage.setItem('Projects', JSON.stringify(allProj))
    }

    const loadData = ()=>{
        
        if(localStorage.getItem('Projects')){
            const loadedData = JSON.parse(localStorage.getItem('Projects'))
            const returnData = [];
            loadedData.forEach(ele => {
                const loadProjectTitle = ele.name;
                const loadProjectsTasks = [];
                ele.tasks.forEach(task=>{
                    loadProjectsTasks.push(new Task(task.name, task.description, task.dueDate, task.priority, task.notes, task.project))
                })
                const loadProjectCompleted = ele.completed;
                returnData.push(new Project(loadProjectTitle, loadProjectsTasks, loadProjectCompleted))
            })
            return returnData;
        }
        else return [];
    }

    const clearData = ()=>{
        localStorage.setItem('Projects', '');
    }

    return{saveData, loadData, clearData}
})();

export default dataStorage;