export const addTaskRedux = (taskInput) => {
    return {
        type:'ADD_TASK',
        payload:taskInput
    }
}

export const toggleTaskRedux = (id) => {
    return {
        type:'TOGGLE_TASK',
        payload:id
    }
}

export const removeTaskRedux = (id) => {
    return {
        type:'REMOVE_TASK',
        payload:id
    }
}