 import { NavLink } from "react-router-dom";
const Game = () => {
  return (
    <div className="pageHead">
  
      <div className="creators">
        <h1> ⭐ Play a game ⭐</h1>
       
       
       <iframe  
       title='game' 
       src="https://angry-viruses.netlify.app/"
       id="iframe1"></iframe>

      <NavLink className="postNewGame" to="/postGame">
      <button>Post a Game</button>
          </NavLink>
      <div>   
      <div className="footerDown"></div>
      </div>

      </div>
    </div>
  );
};

export default Game;
