import React from 'react';
import subjects from './HOC'

class Abu extends React.Component {

    constructor(props){
    
        super(props)

        this.state = {
            name: "Abu"
        }
    }


    render() {
    
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.props.hocsub}</h3>
            </div>
        )
    }
}

export default subjects(Abu);