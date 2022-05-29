import React,  { useState, useEffect, useRef } from 'react';

const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer+1)
        }, 1000)

        return (() => {
            clearInterval(intervalRef.current)
        })
    }, [timer])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Cler Tmer</button>
        </div>
    )
}

export default HookTimer;