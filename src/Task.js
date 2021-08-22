import React from 'react';
import { TaskButton } from './TaskButton';

export class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    }
    render() {
        return (
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md mt-4">
                <h1 className="font-medium">{this.props.name}</h1>
                <h3 className="task-time">
                    {this.props.time.toLocaleString()}
                </h3>
                <TaskButton
                    onClick={this.handleFinish}
                    text="Complete"
                    color="green"
                />
                <TaskButton
                    onClick={this.handleDelete}
                    text="Delete"
                    color="red"
                />
            </div>
        );
    }
    handleDelete() {
        this.props.deleteTask(this.props.taskId);
    }
    handleFinish() {
        this.props.finishTask(this.props.taskId);
    }
}
