import React, { Component } from "react";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) return <h1>Some Error</h1>;
        return this.props.children;
    }
}

export default ErrorBoundaries;
