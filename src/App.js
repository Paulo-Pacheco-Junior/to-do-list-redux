import MainRoutes from './MainRoutes';
import {Template} from './partials/MainPartials';
import Header from './partials/Header';
import Footer from './partials/Footer';

function App() {
  return (
    <Template>
      <Header />
        <MainRoutes />
      <Footer />
    </Template>
  );
}

export default App;
