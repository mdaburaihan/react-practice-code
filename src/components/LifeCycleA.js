import React from 'react';

class LifecycleA extends React.Component {

    constructor(props){
        console.log("Lifecycle A: constructor")
        super(props)

        this.state = {
            name: "Abu"
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle A: getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("Lifecycle A: componentDidMount")
    }

    render() {
        console.log("Lifecycle A: render")
        return <h1>Hello header from class component {this.props.name}</h1>
    }
}

export default LifecycleA;