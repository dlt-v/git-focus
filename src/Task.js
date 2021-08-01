import React from "react";

export class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <h1 className="task-name">{this.props.name}</h1>
                <h3 className="task-time">{this.props.time}</h3>
                <button className="button-complete">Complete</button>
                <button className="button-delete">Delete</button>
            </div>
        );
    }
}
