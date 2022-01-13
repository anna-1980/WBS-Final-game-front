import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game from './components/Games';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer'
import PostGames from './components/PostGame';

function App() {
  return (
    <div className="App">
      <div className="landingHeaderDiv"></div>
        <div className="navigation">
        <Navbar />
        <Routes>
          {/* <Route path='/' element={ <Navbar />}> */}
            <Route index element= {<Home />} />
            <Route path='about' element= {<About />} />
            <Route path='Home' element= {<Home />} />
            <Route path='Games' element= {<Game />} />
            <Route path='postGame' element= {<PostGames />} />
            <Route path='Contact' element= {<Contact />} />
            <Route path = '*'  element = {<NotFound />} />
          {/* </Route> */}
        </Routes>
        </div>
 
        <div >
          <Footer />
        </div>
    </div>
  );
}

export default App;
