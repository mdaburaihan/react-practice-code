import React, { useState, useEffect } from 'react';

const HookCounter = () => {

    const userName = useState("ABU");
    const subscriber = useState("subscriber");

    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);
    const [uname, setUName] = useState({
        firstName: "",
        lastName: ""
    })

    const name = userName[0];
    const setName = userName[1];

    const stateHandler = () => {
        setName("RAIHAN")
        subscriber[1](100)
    }

    const Increment = () => {
        //setCounter(counter+1)

        for(let i=0; i<10; i++){
            setCounter(prevCount => prevCount+1)
        }
    }

    const Decrement = () => {
        setCounter1(counter1-1)
    }

    useEffect(() => {
        console.log("test")
    }, [counter1])

    return (
        <div>
            {userName}
            {subscriber}
            {counter}
            <button onClick={stateHandler}>Click Me</button>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default HookCounter;