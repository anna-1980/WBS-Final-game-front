 import { NavLink } from "react-router-dom";
 import { Link } from "react-router-dom";
const Games = ({games}) => {
  return (
    <div className="pageHead">
    
 

      <div className="displayGames">
        <h1> ⭐ Play a game ⭐</h1>
        
        <div>{games.map(({date, user, url, _id }) => {
            return (
              console.log(games),
              <div className="gamesContainer">
                  <h2>{date} </h2>
                  <h3>{user} </h3>
                <Link to={`/Games/${_id}`} key={_id}>
                <div className="iframeDiv">
                   <iframe  
                       id="allFrames"
                       title='game' 
                       src={url}
                       ></iframe>
                </div></Link>
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
