import { Routes, Route } from 'react-router-dom';
import './App.css';
import './animations.css';
import About from './components/About'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer'
import PostGames from './components/PostGame';
import OneGame from './components/OneGame';
import Landing from './components/Landing'
 

import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
 
  
  useEffect(() => {
    const getGames = async () => {
    try {
      const { data } = await axios.get("https://wbs-final-game-back.herokuapp.com/api/games");
      setLoading(true);
      setGames(data);
      console.log(`get all games: ${data}`);
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
      
        <Routes>           
            <Route index element= {<Home />} />
            <Route path='about' element= {<About />} />
            <Route path='Home' element= {<Home />} />
            <Route path='Games' element= {<Games games= {games} loading= {loading}/>} />
            <Route path='Games/:id' element= {<OneGame games= {games} setGames={setGames}  setLoading = {setLoading} loading= {loading}/>} />
            <Route path='postGame' element= {<PostGames />} />
            <Route path='Contact' element= {<Contact />} />
            <Route path = '*'  element = {<NotFound />} />    
        </Routes>
        </div>
        
        <div>
          {loading ? ("I am still LOADING...") : 
          (``)}
        </div>
        <Navbar />
        <div >
          <Footer />
        </div>
        
    </div>
  );
}

export default App;
