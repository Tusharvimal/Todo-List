export const addTask = newTask => {
    return {
        type: "ADD_TASK",
        payload: newTask
    }
}

export const removeTask = key => {
    return {
        type : "REMOVE_TASK",
        payload: key
    }
}