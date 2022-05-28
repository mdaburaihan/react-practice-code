import React from 'react';

class CFunctionClick extends React.Component {

    constructor(props){
        super(props);
        //this.changeEvent = this.changeEvent.bind(this)

        this.state = {
            msg: 'here',
            roll: this.props.roll
        }
    
    }

    changeEvent = () => {
        console.log("Hello Abu from C function click", this.props.roll)
    }
    render() {
        return (
            <div>
                <button onClick={this.changeEvent}>Hit me</button>
            </div>
        )
    }
}

export default CFunctionClick;