import { Container } from "./styled";
import { useState } from "react";

export const AddInput = (props) => {

  const [inputTask, setInputTask] = useState('');
  
  const handleChange = (e) => {
    setInputTask(e.target.value);
  }

  const handleAddTask = (e) => {
    let trimInput = inputTask;
    if(trimInput.trim() !== ''){
      props.addList(inputTask);
      setInputTask('');
    }
  }

  const handleEnterTask = (e) => {
    let trimInput = inputTask;
    if(e.code === 'Enter' && trimInput.trim() !== '') {
      props.addList(inputTask);
      setInputTask('');
    }
  }

  return (
    <Container>
      <input 
        type='text'
        placeholder='Adicione uma nova tarefa...' 
        value={inputTask}
        onChange={handleChange}
        onKeyUp={handleEnterTask}
      />
      <button onClick={handleAddTask}>Adicionar</button> 
    </Container>
  );
}