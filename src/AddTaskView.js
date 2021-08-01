import React from 'react';
import { NavButton } from './NavButton.js';

export class AddTaskView extends React.Component {
    constructor(props) {
        super(props);
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
                <NavButton
                    content="Back"
                    changePage={this.props.changePage}
                    newPage="task-list"
                />
            </div>
        );
    }
}