import React,  { useState, useCallback} from 'react';
import List from './List'

const Callbacktest = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = useCallback((inrementor)=>{
        return [number+inrementor, number+1+inrementor, number+2+inrementor]
    },[number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle</button>
            <List getItems={getItems}></List>
        </div>
    )
}

export default Callbacktest;