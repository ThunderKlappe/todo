export class Project{
        constructor(initTitle){
        this.title = initTitle;
        this.tasks = [];
        this.completed = false;
        this.selected = false;
    }
    getTitle(){return this.title;}
    getTasks(){return this.tasks;}
    isCompleted(){return this.completed;}
    isSelected(){return this.selected;}
    setTitle(newTitle){this.title = newTitle;}
    addTask(newTask){this.tasks.push(newTask);}
    markComplete(value){this.completed = value;}
    markSelected(value){this.selected = value;}
}