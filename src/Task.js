import React from "react";

export class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render() {
        return (
            <div className="task">
                <h1 className="task-name">{this.props.name}</h1>
                <h3 className="task-time">
                    {this.props.time.toLocaleString()}
                </h3>
                <button className="button-complete">Complete</button>
                <button onClick={this.handleDelete} className="button-delete">Delete</button>
            </div>
        );
    }
    handleDelete() {
        this.props.deleteTask(this.props.taskId);
    }
}
