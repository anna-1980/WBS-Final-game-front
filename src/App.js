import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game from './components/Game';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="landingHeaderDiv"></div>
        <div className="navigation">
        <Routes>
          <Route path='/' element={ <Navbar />}>
            <Route index element= {<Home />} />
            <Route path='about' element= {<About />} />
            <Route path='Home' element= {<Home />} />
            <Route path='Game' element= {<Game />} />
            <Route path='Contact' element= {<Contact />} />
            <Route path = '*'  element = {<NotFound />} />
          </Route>
        </Routes>
        </div>

        <div>
          just anything
        </div>
    </div>
  );
}

export default App;
