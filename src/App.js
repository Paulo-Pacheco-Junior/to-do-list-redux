import NavBar from './partials/NavBar';
import Footer from './partials/Footer';
import PagesRoutes from './PagesRoutes';
import './App.css';

function App() {
  return (
    <div className='responsive'>
      <NavBar />
      <PagesRoutes />
      <Footer />
    </div>
  );
}

export default App;
