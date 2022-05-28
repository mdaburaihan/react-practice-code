import React from 'react';

class Channel extends React.Component {
    constructor () {
        console.log("---1")
        super ();
        this.state = {
            msg: "hello world abu"
        }
    }

    subscribe () {
        this.setState ({
            msg: "hello world state changed"
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>state test 55555555555555= {this.state.msg}</h1>
                <button onClick={ () => { this.subscribe() }}>Subscribe</button>
            </React.Fragment>
        )
    }
}

export default Channel;