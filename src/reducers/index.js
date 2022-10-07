export const initialState = {
  taskList:[
    {id:1, task:'Pagar o condomínio dia 10', done:false},
    {id:2, task:'Pagar a energia dia 4', done:false},
    {id:3, task:'Pagar a Unimed dia 25', done:false},
    {id:4, task:'Pagar a água dia 23', done:false},
    {id:5, task:'Pagar o gás dia 10', done:false},
  ] 
}

export const tasksReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch(action.type) {
    case 'ADD_TASK': {
      const list = [...state.taskList]; 
      list.push(action.payload);
      return {...state, taskList:list};
    }
    case 'REMOVE_TASK': {
      const list = [...state.taskList];
      const filteredList = list.filter((item) => item.id !== action.payload);
      return {...state, taskList:filteredList};
    }
    case 'TOGGLE_TASK': {
      const list = [...state.taskList];
      const filt = list.map(todo => 
      (todo.id === action.payload)
       ? {id:todo.id, task:todo.task, done:!todo.done} 
       : {id:todo.id, task:todo.task, done:todo.done})
      return {...state, taskList:filt}
    }
    default:
    return state;
  }
}