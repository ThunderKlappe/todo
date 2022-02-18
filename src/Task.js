class Task{

    constructor(name, description, dueDate, priority, notes, project){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
        this.completed = false;
    }
    
    getName = ()=>this.name
    getDescription = ()=>this.description
    getDate = ()=>this.dueDate
    getPriority = ()=>this.priority
    getNotes = ()=>this.notes
    getProject = ()=>this.project
    isComplete = ()=>this.completed

    setName = (newName)=>this.name = newName
    setDescription = (newDescription)=>this.description = newDescription
    setDueDate = (newDueDate)=>this.dueDate = newDueDate
    setPriority = (newPriority)=>this.priority = newPriority
    setNotes = (newNotes)=>this.notes = newNotes
    markComplete = ()=>this.completed = true
}
export default Task;