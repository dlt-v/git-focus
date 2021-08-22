import React from 'react';
import { NavButton } from './NavButton.js';

export class AddTaskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            time: '',
            flag: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.sumbitTask = this.sumbitTask.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    }
    sumbitTask() {
        const fullTime = new Date(`${this.state.date} ${this.state.time}`);
        const time = `${fullTime.getDate()}-${
            fullTime.getMonth() + 1
        }-${fullTime.getFullYear()}, ${fullTime.getHours()}:${fullTime.getMinutes()}`;
        this.props.addTask(
            this.state.name ? this.state.name : 'No name',
            time,
            this.state.flag
        );
        this.resetInputs();
    }
    resetInputs() {
        this.setState({
            name: '',
            date: '',
            time: '',
            flag: '',
        });
        this.props.changePage();
    }
    render() {
        return (
            <div>
                <h1 className="text-2xl font-bold">Add Task</h1>
                <div className="input-row">
                    <label htmlFor="name">Name:</label>
                    <input
                        className="w-9/12"
                        type="text"
                        name="name"
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
                    <label htmlFor="time">Hour:</label>
                    <input
                        type="time"
                        name="time"
                        id="time"
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
                <button onClick={this.sumbitTask}>Add</button>
                <NavButton
                    content="Back"
                    changePage={this.props.changePage}
                    newPage="task-list"
                />
            </div>
        );
    }
}
