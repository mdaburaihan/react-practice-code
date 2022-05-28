import React from 'react';

const Todo = (props) => {
    const { todo, dispatch } = props;
    return (
        <div>
           <span style={{ color: todo.isCompleted ? "#AAA" : "#00"}}>{ todo.name }</span>
           <button onClick={() => dispatch({ type: "toggle_todo", payload: { id: todo.id }})}>Toggle</button>
           <button>Delete</button>
        </div>
    )
}

export default Todo;