import { useSelector, useDispatch } from "react-redux";
import { toggleTaskRedux, removeTaskRedux } from "../../actions";

import { ListGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Line } from "./styled";
import '../../App.css';


function ListCompleted() {

  const dispatch = useDispatch();
  const resultRedux = useSelector(state => state.tasks.taskList);

  const toggleTask = (id) => {
    dispatch(toggleTaskRedux(id));
  }

  const removeTask = (id) => {
    dispatch(removeTaskRedux(id));
  }

  return (
    <ListGroup numbered className='my-5 m-auto'>     
      {resultRedux.map((item, index)=>{
        if(item.done === true) {
        return (
          <ListGroup.Item 
            className='d-flex justify-content-between align-items-center '
            key={index}
            onClick={()=>toggleTask(item.id)}
          >
          <Line 
            className='w-50 d-flex justify-content-between align-items-center responsive-text'
            linethrough={item.done}
          >
            {item.task}
          </Line>
            <Button className='btn btn-danger' onClick={()=>removeTask(item.id)}>
              Excluir
            </Button>
          </ListGroup.Item>
      )}})}
    </ListGroup>
  );
}

export default ListCompleted;