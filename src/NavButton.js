import React from "react";

export class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.changePage(this.props.newPage)
    }
    render() {
        return (
            <button className="add-task-button" onClick={this.handleClick}>
                {this.props.content}
            </button>
        );
    }
}
