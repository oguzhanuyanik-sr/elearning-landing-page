import { BrowserRouter } from 'react-router-dom';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Introduction />
      <Courses />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
