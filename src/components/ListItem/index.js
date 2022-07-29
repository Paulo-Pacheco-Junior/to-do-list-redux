import { Container } from "./styled";

export const ListItem = (props) => {

  const handleCheck = () => {
    props.status(props.item.id, props.item.status);
  }

  const formatText = (text) => {
    return text[0].toUpperCase() + text.substring(1);
  }

  return (
    <Container onClick={handleCheck} line={props.item}>
      <input 
        type='checkbox'
        checked={props.item.status} 
        onChange={e=>e.target.checked}
      />
      <div>{formatText(props.item.task)}</div>
    </Container>
  );
}