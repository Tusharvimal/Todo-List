import React from 'react'
import { useDispatch } from 'react-redux';

function Task({ todo, index }) {
    console.log(todo);
    const dispatch = useDispatch();

    const Delete = () => {
        dispatch({
            type: 'REMOVE_TASK',
            payload: index
        })
    }

    return (
        <>
            <div className="container border border-success pb-3 pt-3 m-1" >
                <h4>{todo.title}</h4>
                {todo.startDate ? <span style={{fontWeight:"bold"}}>Start Date - {todo.startDate}</span> : ""}
                {todo.endDate ? <span style={{fontWeight:"bold",marginLeft:"20px"}}>End Date - {todo.endDate}</span> : ""}
                <p>{todo.desc}</p>
                <button className="btn btn-danger btn-sm" onClick={Delete}>Remove</button>
            </div>
        </>
    )
}

export default Task;
