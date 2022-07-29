import { Link } from 'react-router-dom';
import { Container } from './styled';

function PageNotFound() {
  return (
    <Container>
     <h1>Página não encontrada.</h1>
      <button>

      <Link to='/'>Ir para a Página Inicial</Link>
      </button>
    </Container>
  );
}

export default PageNotFound;
