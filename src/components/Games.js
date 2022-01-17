 import { NavLink } from "react-router-dom";
 import { Link } from "react-router-dom";
const Games = ({games}) => {
  return (
    <div className="pageHead">
    
 

      <div className="displayGames">
        <h1 textBackground> ⭐ Play a game ⭐</h1>
        
        <div className="gamesContainer">{games.map(({title, author, url, _id }) => {
            return (
              console.log(games),
              <div className="gameDisplayPadding">
                  <h3>{title} </h3>
                  <h2>Created by: {author} </h2>
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
