 import { NavLink } from "react-router-dom";
const Games = ({games}) => {
  return (
    <div className="pageHead">
    
   

      <div className="displayGames">
        <h1> ⭐ Play a game ⭐</h1>

        <div>{games.map(({date, user, url  }) => {
            return (
              <div className="gamesContainer">
                 <h2>{date} </h2>
                 <h3>{user} </h3>
                 <iframe  
                     title='game' 
                     src={url}
                     id="iframe1"></iframe>
              </div>
            );
          })}
        </div>
        <div>
          <NavLink className="postNewGame" to="/postGame">
          <button>Post a Game</button>
        </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Games;
