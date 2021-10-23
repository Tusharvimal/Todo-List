import React, { useState } from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'

function Tasks() {

    const todos = useSelector(state => state.taskChange.todos)
    const [taskHeading, setTaskHeading] = useState("")
    const [taskDesc, setTaskDesc] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const dispatch = useDispatch();
    let sno = 0;
    if (todos.length >= 1) {
        sno = todos[todos.length - 1].sno + 1;
    }
    else {
        sno = 1;
    }

    const newTask = {
        sno: sno,
        title: taskHeading,
        startDate: startDate,
        endDate: endDate,
        desc: taskDesc
    }

    const AddTask = (e) => {
        e.preventDefault()
        if (!taskHeading || !taskDesc) {
            alert("Title or Description cannot be blank!")
        }
        else {
            dispatch({
                type: 'ADD_TASK',
                payload: newTask
            })
        }
    }

    return (
        <>
            <div className="container mt-2">
                <form onSubmit={AddTask}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Task Heading</label>
                        <input type="text" className="form-control" value={taskHeading} onChange={(e) => {
                            setTaskHeading(e.target.value)
                        }} id="taskheading" />
                    </div>
                    <div className="mb-3" style={{display:"block"}}>
                        <label htmlFor="startDate" className="form-label">Starting Date</label>
                        <input type="date" className="form-control" value={startDate} onChange={(e) => {
                            setStartDate(e.target.value)
                        }} id="startDate" name="startDate" style={{width:"20%",display:"inline",marginLeft:"20px"}} />
                    </div>
                    <div className="mb-3" style={{display:"block"}}>
                        <label htmlFor="endDate" className="form-label">Ending Date</label>
                        <input type="date" className="form-control" value={endDate} onChange={(e) => {
                            setEndDate(e.target.value)
                        }} id="endDate" name="endDate" style={{width:"20%",display: "inline",marginLeft:"20px"}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Task Description</label>
                        <textarea className="form-control" value={taskDesc} onChange={(e) => {
                            setTaskDesc(e.target.value)
                        }} id="taskdescription" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success text-center">Add Task</button>
                </form>
            </div>
            <div className="container">
                <h3 className="my-4 text-center" > {todos.length ? `Tasks Todo - ${todos.length}` : "All Wrapped Up !!!"}</h3>
                {todos.map((todo) => {
                    return <Task todo={todo} key={todo.sno.toString()} index={todo.sno} />
                })}
            </div>
        </>
    )
}

export default Tasks;
