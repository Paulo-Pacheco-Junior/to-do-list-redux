import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand='md true'  bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home">REDUX | To-do-List </Navbar.Brand>
        <Nav className="ms-auto">
          <Link className='py-2 m-auto me-1 text-white my-auto ms-5 text-decoration-none' to="/">Home</Link>
          <Link className='py-2 m-auto me-3 me-md-5 text-white my-auto mx-5 text-decoration-none' to="CompletedTasks">Tarefas Completas</Link>
          <Link className='py-2 m-auto me-1 text-white my-auto text-decoration-none' to="IncompleteTasks">Tarefas Incompletas</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;