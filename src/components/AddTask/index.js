import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTaskRedux } from "../../actions";
import Button from 'react-bootstrap/Button';

function AddTask() {
  
  const dispatch = useDispatch();
  const resultRedux = useSelector(state => state.tasks.taskList);
  
  const [taskInput, setTaskInput] = useState();

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTaskRedux({id:resultRedux.length+1, task:taskInput, done:false}));
    setTaskInput('');
  }

  return (
    <form>
      <input
        className="form-control-sm" 
        type='text'
        placeholder='Adicione uma Tarefa...'
        value={taskInput}
        onChange={e=>setTaskInput(e.target.value)}
      />
      <Button className="ms-3 btn btn-dark" onClick={handleAddTask}>Adicionar</Button>
    </form>
  );
}

export default AddTask;