import React from 'react';
import {mycontext} from './A'

class C extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                 <h1>Component C</h1>
                <mycontext.Consumer>{ data => <h3>{data}</h3> }</mycontext.Consumer>
            </div>
        )
    }
}

export default C;