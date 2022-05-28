import React from 'react';

import B from './B'
import C from './C'
export const mycontext = React.createContext()

class A extends React.Component {

    constructor(props){
        super(props)

       

        this.state = {
            name: "Abu"
        }
    }

    render() {
        console.log("this.props", this.props)
        return (
            <div>
                <h1>Component A</h1>
                <mycontext.Provider value={ this.state.name }>
                    <B/>
                    <C/>
                </mycontext.Provider>
                <button onClick={ this.props.handleClickFunction }>Handle Click</button>
            </div>
        )
    }
}

export default A;