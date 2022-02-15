const Project = (title)=>{
    this._title = title;
    this._tasks = [];
    this._completed = false;

    const getTitle = ()=>{this._title;}
    const getTasks = () =>{this._tasks};
    const isComplete = () =>{this._completed};
    const setTitle = (newTitle)=>{this._title = newTitle;}
    const addTask = (newTask) =>{this._tasks.push(newTask);}
    const markComplete = () =>{this._completed = true;}
    

    return{ getTitle, getTasks, isComplete, setTitle, addTask, markComplete }
}

export default Project;