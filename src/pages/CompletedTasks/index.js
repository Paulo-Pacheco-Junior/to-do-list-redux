import { useEffect, useState } from 'react';
import { AddInput } from '../../components/AddInput';
import { ListItem } from '../../components/ListItem';
import { Container } from './styled';

function CompletedTasks() {

  const [ tasks, setTasks ] = useState([
    {id:1, task:'Acordar 07:00', status:true},
    {id:2, task:'Cuidar dos porquinhos da Índia', status:true},
    {id:3, task:'Fazer compras', status:false},
    {id:4, task:'Fazer um projeto', status:true},
    {id:5, task:'Fazer uma entrevista de emprego', status:false},
    {id:6, task:'Malhar', status:false},
    {id:7, task:'Dormir no máximo 23:00', status:false}
  ]);

  useEffect(()=>{
    let newFilter = [...tasks];
    for(let i in newFilter)
    if(newFilter[i].status === false) {
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

  return (
    <Container>

      <h1>Tarefas Concluídas</h1>

      <div className='list'>
        <ul>
          {tasks.map((item, index)=>(
            <ListItem key={index} item={item} status={handleStatus} />
          ))}
        </ul>
      </div>
    
    </Container>
  );
}

export default CompletedTasks;
