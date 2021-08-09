import React from "react";
import { Task } from "./Task.js";
import { NavButton } from "./NavButton.js";
import { AddTaskView } from "./AddTaskView.js";

let Tasks = [
    {
        id: 1,
        name: "Buy Groceries",
        time: new Date(),
        flag: "green",
    },
    {
        id: 2,
        name: "Visit Mom",
        time: new Date(),
        flag: "blue",
    },
];
let nextTaskId = 3;
const getNextTaskId = () => {
    nextTaskId += 1;
    return nextTaskId;
}
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.state = {
            currentPage: "task-list",
            tasks: Tasks
        };
        this.changePage = this.changePage.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    render() {
        let currentPage = this.state.currentPage;
        let view =
            currentPage === "add-task" ? <AddTaskView addTask={this.addTask} changePage={this.changePage}/> : this.renderTaskList();
        return <div className="app-container">{view}</div>;
    }

    changePage(newPage) {
        this.setState({
            currentPage: newPage,
        });
    }

    renderTaskList() {
        return (
            <div className="tasks-view">
                <div className="today">
                    <h3>August 18th</h3>
                    <h1>Monday_</h1>
                    <div className="nav-button">
                        <span>{">"}</span>
                    </div>
                </div>
                {Tasks.map((task) => {
                    return (
                        <Task deleteTask={this.deleteTask} taskId={task.id} key={task.id} name={task.name} time={task.time} />
                    );
                })}
                <NavButton
                    content="Back"
                    changePage={this.changePage}
                    newPage="add-task"
                />
            </div>
        );
    }

    addTask(name, time, flag) {
        const newTasks = [...this.state.tasks,
            {
                id: getNextTaskId(),
                name: name,
                time: time.toLocaleString(),
                flag: flag
            }
        ];
        console.log(newTasks);
        this.setState({tasks: newTasks});
        console.log(this.state);
    }

    deleteTask(taskId) {
        console.log(`I am deleting task number: ${taskId}`);
        let newTasks = Tasks;
        newTasks = newTasks.filter(task => task.id !== taskId);
        Tasks = newTasks;
    }
}
