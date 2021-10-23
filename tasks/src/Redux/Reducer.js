const initialState = {
    todos: []
}

const taskChange = ((state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return{
                ...state,
                todos: [...state.todos,action.payload]
            }
        
        case 'REMOVE_TASK':
            return {
                state,
                todos: state.todos.filter((todo) => todo.sno!==action.payload )
            }

        default:
            return state
    }
})

export default taskChange;