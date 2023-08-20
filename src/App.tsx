import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Courses from './components/Courses';
import Footer from './components/Footer';

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
