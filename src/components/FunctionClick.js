import React from 'react';

const FunctionClick = () => {

    const changeEvent = () => {
        console.log("Change event called")
    }
    return (
        <div>
            <button onClick={changeEvent}>Click Me</button>
        </div>
    )
}

export default FunctionClick;