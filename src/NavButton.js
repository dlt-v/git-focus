import React from 'react';

export class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.changePage(this.props.newPage);
    }
    render() {
        return (
            <button
                className={`px-3 py-2 rounded-md transform transition hover:-translate-y-px focus:ring-brand focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-sm mr-0 mt-3 bg-purple-400 block m-auto`}
                onClick={this.handleClick}
            >
                {this.props.content}
            </button>
        );
    }
}
