import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const OneGame = () => {
   const [game, setGame] = useState([]);
   console.log(`Log :`);
    
   const {id} = useParams();
   console.log(game.title);

   useEffect(() => { 
    const getGame = async () => {
    try {
      const { data } = await axios.get(`https://wbs-final-game-back.herokuapp.com/api/games/${id}`);
    //   setLoading(true);
      console.log(data);
      setGame(data);
      console.log(`from oneGame ${data}`);
    //   setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong with your game")
    }
  };
  getGame();
  }, []);
     
    return (
      <div className="pageHead">

       <h3> {game.title}</h3>
      
            <div>
                   <iframe  className="oneGameFrame"
                       title={game.title} 
                       src={game.url}
                       id="iframe1"></iframe>
            </div>
      </div>
    );
  };
  
  export default OneGame;
//   ${id}