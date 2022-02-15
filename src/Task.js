const Task = (name, description, dueDate, priority, notes, project) =>{
    this._name = name;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._notes = notes;
    this._project = project;
    this._completed = false;

    const getName = ()=>{this._name}
    const getDescription = ()=>{this._description}
    const getDueDate = ()=>{this._dueDate}
    const getPriority = ()=>{this._priority}
    const getNotes = ()=>{this._notes}
    const getProject = ()=>{this._project}
    const isComplete = ()=>{this._completed}

    const setName = (newName)=>{this._name = newName}
    const setDescription = (newDescription)=>{this._description = newDescription}
    const setDueDate = (newDueDate)=>{this._dueDate = newDueDate}
    const setPriority = (newPriority)=>{this._priority = newPriority}
    const setNotes = (newNotes)=>{this._notes = newNotes}
    const markComplete = ()=>{this._completed = true}

    return { getName, getDescription, getDueDate, getPriority, getNotes, getProject, isComplete, setName, setDescription, setDueDate, setPriority, setNotes, markComplete }
}