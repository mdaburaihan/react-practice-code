import React,  { useState, useMemo, useEffect} from 'react';

const Memotest = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    },[number])

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log("themes updated")
    }, [themeStyles])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num){
    for(let i=0; i<10; i++){}
    return num = num*2;
}

export default Memotest;