import { useEffect, useState } from 'react';
import { AddInput } from '../../components/AddInput';
import { ListItem } from '../../components/ListItem';
import { Container } from './styled';

function IncompleteTasks() {

  const [ tasks, setTasks ] = useState([
    {id:1, task:'acordar as 07:00', status:true},
    {id:2, task:'dar pepino pros porquinhos', status:true},
    {id:3, task:'lavar as vasilhas', status:false},
    {id:4, task:'tomar banho aprox 17:00', status:true},
    {id:5, task:'estudar', status:false},
    {id:6, task:'malhar', status:false},
    {id:7, task:'Dormir no máximo 23:00', status:false}
  ]);

  useEffect(()=>{
    let newFilter = [...tasks];
    for(let i in newFilter)
    if(newFilter[i].status === true) {
      newFilter[i].id = 'X';
    }
    setTasks(newFilter);
  },[]);

  const handleStatus = (id, status) => {
    let newStatus = [...tasks];
    for(let i in newStatus) {
      if(newStatus[i].id === id) {
        newStatus[i].status = !status;
      }
    }
    setTasks(newStatus);
  }

  const handleFilter = () => {
    let newFilter = [...tasks];
    for(let i in newFilter)
    if(newFilter[i].status === true) {
      newFilter[i].task = 'Tarefa Cumprida';
      newFilter[i].id = 'X';
    }
    setTasks(newFilter);
  }

  return (
    <Container>

      <h1>Tarefas A Fazer</h1>

      <div className='list'>
        <ul>
          {tasks.map((item, index)=>(
            <ListItem key={index} item={item} status={handleStatus} />
          ))}
        </ul>
      </div>

      <button onClick={handleFilter}>Excluir Tarefas Concluídas</button>
    
    </Container>
  );
}

export default IncompleteTasks;

