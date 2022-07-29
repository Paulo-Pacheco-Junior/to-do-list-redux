import { useState } from 'react';
import { ListItem } from '../../components/ListItem';
import { Container } from './styled';

function HireMe() {
  const [ tasks, setTasks ] = useState([
    {id:1, task:'React-Router-Dom', status:false},
    {id:2, task:'UseState', status:false},
    {id:3, task:'UseEffect', status:false},
    {id:4, task:'Passagem de Informações e Funções entre Componentes através de Props', status:false},
    {id:5, task:'Componentes Controlados de Input de Texto e Checkbox', status:false},
    {id:6, task:'Javascript (map, for, push, toUpperCase, trim, substring)', status:false},
    {id:7, task:'Componentização e organização de pastas', status:false},
    {id:8, task:'Styled Components', status:false},
    {id:9, task:'Passagem de Props para o Styled Components', status:false},
    {id:10, task:'Responsividade', status:false}
  ]);

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
      <h1>Conhecimentos Demonstrados:</h1>
      <div className='listknowledge'>
        <ul>
          {tasks.map((item, index)=>(
            <ListItem key={index} item={item} status={handleStatus} />
          ))}
        </ul>
      </div>

      <p>A próxima versão terá <strong>useContext, useReducer ou Redux</strong> para
       compartilhar <span>apenas 1 Lista de Afazeres</span> entre as 3 telas do cabeçalho.</p>
    </Container>
  );
}

export default HireMe;
