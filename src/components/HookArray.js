import React, { useState, useEffect } from 'react';

const HookArray = () => {

    const [item, setItem] = useState([])

    const addItems = () => {
        setItem([...item, {
            id: item.length,
            value: Math.floor(Math.random()*10)
        }])
    }


    return (
        <div>
           <button onClick={ addItems }>Add Random Value</button>
           <ul>
               { item.map(obj => <li key={ obj.id }> {obj.value} </li>)}
           </ul>
        </div>
    )
}

export default HookArray;