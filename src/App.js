import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer'
import PostGames from './components/PostGame';

import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [games, setGames] = useState([]);
  const[loading, setLoading] = useState(false);
  
  
  useEffect(() => {
  
    const getGames = async () => {
    try {
      const { data } = await axios.get("https://wbs-final-game-back.herokuapp.com/api/games");
      setLoading(true);
      setGames(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong getting the games")
    }
  };
  getGames();
  }, []);



  return (
    <div className="App">
      <div className="landingHeaderDiv"></div>
        <div className="navigation">
        <Navbar />
        <Routes>           
            <Route index element= {<Home />} />
            <Route path='about' element= {<About />} />
            <Route path='Home' element= {<Home />} />
            <Route path='Games' element= {<Games games= {games} loading= {loading}/>} />
            <Route path='postGame' element= {<PostGames />} />
            <Route path='Contact' element= {<Contact />} />
            <Route path = '*'  element = {<NotFound />} />    
        </Routes>
        </div>
        
        <div>
          {loading ? ("I am still LOADING...") : 
          (`not loading anymore`)}
        </div>

        <div >
          <Footer />
        </div>
        
    </div>
  );
}

export default App;
