import React, { useState, useReducer } from 'react';
import Todo from './Todo'
const ACTIONS = {
    ADD_TODO: "add_todo",
    TOGGLE_TODO: "toggle_todo"
}

function reducer (todos, action) {
    switch(action.type){
        case ACTIONS.ADD_TODO: {
            return [...todos, newTodo(action.payload.name)]
        }
        case ACTIONS.TOGGLE_TODO: {
            return todos.map(eachtodo => {
                if(eachtodo.id === action.payload.id){
                    return {...eachtodo, isCompleted: !eachtodo.isCompleted}
                }
            })
        }
        default:
            return todos;
    }
}

function newTodo(name){
    return { id: Date.now(), name: name, isCompleted: false }
}

const ReducerTest1 = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("")

    function handleSubmit (e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName("")
    }

    console.log(todos)

    return (
        <div>
          <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </form>
          {todos.map(eachtodo => <Todo key={eachtodo.id} todo={eachtodo} dispatch={dispatch}></Todo>)}
        </div>
    )

}

export default ReducerTest1;