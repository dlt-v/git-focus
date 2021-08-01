import React from "react";
import { NavButton } from "./NavButton.js";

export class AddTaskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: "",
            time: "",
            flag: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            [name]: value,
        });
    }
    render() {
        return (
            <div className="add-task-view">
                <div className="nav-button">
                    <span>{">"}</span>
                </div>
                <h1>Add Task</h1>
                <div className="input-row">
                    <label htmlFor="task">Name:</label>
                    <input
                        type="text"
                        name="task"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="date">Hour:</label>
                    <input
                        type="time"
                        name="date"
                        id="date"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="flag">Flag</label>
                    <select name="flag" id="flag" onChange={this.handleChange}>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                    </select>
                </div>
                <button>Add</button>
                <NavButton
                    content="Back"
                    changePage={this.props.changePage}
                    newPage="task-list"
                />
            </div>
        );
    }
}
