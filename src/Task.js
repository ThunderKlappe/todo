class Task{

    constructor(name, description, dueDate, priority, notes, project){
        this._name = name;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._project = project;
        this._completed = false;
    }
    
    getName = ()=>this._name
    getDescription = ()=>this._description
    getDate = ()=>this._dueDate
    getPriority = ()=>this._priority
    getNotes = ()=>this._notes
    getProject = ()=>this._project
    isComplete = ()=>this._completed

    setName = (newName)=>this._name = newName
    setDescription = (newDescription)=>this._description = newDescription
    setDueDate = (newDueDate)=>this._dueDate = newDueDate
    setPriority = (newPriority)=>this._priority = newPriority
    setNotes = (newNotes)=>this._notes = newNotes
    markComplete = ()=>this._completed = true
}
export default Task;