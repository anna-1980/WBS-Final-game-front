 import { NavLink } from "react-router-dom";
const Games = ({games}) => {
  return (
    <div className="pageHead">
  
      <div className="creators">
        <h1> ⭐ Play a game ⭐</h1>
        <div>{games.map(({date, user, url  }) => {
            return (
              <div>
                 <h2>{date} </h2>
                 <h3>{user} </h3>
                 <iframe  
                     title='game' 
                     src={url}
                     id="iframe1"></iframe>
             </div>
            );
          })}</div>
       

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

export default Games;
