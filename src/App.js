import React from "react";
import { Task } from "./Task.js";

const Tasks = [
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
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.state = {
            currentPage: "add-task",
        };
        this.changePage = this.changePage.bind(this);
    }

    render() {
        let currentPage = this.state.currentPage;
        let view =
            currentPage === "add-task" ? this.addTask() : this.renderTaskList();
        return <div>{view}</div>;
    }

    addTask() {
        return (
            <div className="app-container">
                <div className="add-task-view">
                    <div className="nav-button">
                        <span>{">"}</span>
                    </div>
                    <h1>Add Task</h1>
                    <div className="input-row">
                        <label htmlFor="task">Name:</label>
                        <input type="text" name="task" />
                    </div>
                    <div className="input-row">
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date" />
                    </div>
                    <div className="input-row">
                        <label htmlFor="date">Hour:</label>
                        <input type="time" name="date" id="date" />
                    </div>
                    <div className="input-row">
                        <label htmlFor="flag">Flag</label>
                        <select name="flag" id="flag">
                            <option value="red">red</option>
                            <option value="red">blue</option>
                            <option value="red">green</option>
                            <option value="red">yellow</option>
                        </select>
                    </div>
                    <button>Add</button>
                    <button onClick={this.changePage.bind(this, "task-list")}>
                        Back
                    </button>
                </div>
            </div>
        );
    }
    changePage(newPage) {
        console.log(newPage);
        this.setState = {
            currentPage: newPage,
        };
        console.log(this.state);
    }
    
    renderTaskList() {
        return (
            <div class="tasks-view">
                <div class="today">
                    <h3>August 18th</h3>
                    <h1>Monday_</h1>
                    <div class="nav-button">
                        <span>{">"}</span>
                    </div>
                </div>
                {Tasks.map((task) => {
                    return <Task name={task.name} time={task.time} />;
                })}
                <button class="add-task-button">new task</button>
            </div>
        );
    }
}
