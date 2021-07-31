import React from "react";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return <h1>Hello, {this.name}!</h1>;
    }
}
