import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game from './components/Game';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Navbar />}>
            <Route index element= {<Home />} />
            <Route path='about' element= {<About />} />
            <Route path='Home' element= {<Home />} />
            <Route path='Game' element= {<Game />} />
            <Route path = '*'  element = {<NotFound />} />
          </Route>
        </Routes>
       
    </div>
  );
}

export default App;
