import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const OneGame = () => {
   const [game, setGame] = useState([]);
   const [loading, setLoading] = useState(false);
   const [scores, setScores] = useState([]);

  //  console.log(`Log : ${scores.playerName}`);
    
   const {id} = useParams();
  

   useEffect(() => { 
    const getGame = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://wbs-final-game-back.herokuapp.com/api/games/${id}`);
      console.log(data);
      setGame(data);
      setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong with your game")
    }
  };
  getGame();
  }, [id]); 

  useEffect(() => {
    const getScores = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://wbs-final-game-back.herokuapp.com/api/scores/${game.title}`);
      setScores(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong getting the games")
    }
  };
  getScores();
  }, [game]);


    return (    <div>
      {loading ? ("I am still LOADING...") : 
      (
        <div className="pageHead ">

        <h3> {game.title}</h3>
       
             <div className="leaderBoard">
                    <iframe  className="oneGameFrame"
                        title={game.title} 
                        src={game.url}
                        id="iframe1"></iframe>
            <div className="scoreDisplay">
                          <div className="tableTitle">
                              <div>SCORE</div>
                              <div>PLAYER NAME</div>
                          </div>
                        {scores.map(({game, playerName, score, _id, }) => {
                        return (
                          // console.log(game),
                          // console.log(playerName),
                          // console.log(score),
                          <div  key={_id} className="scores">
                              {/* <div> {game} </div> */}
                              <div> {score} </div>
                              <div>{playerName} </div>
                          </div>
                          );
                        })}
          </div>
             
             
             
             </div>
             

       </div>
      )}
    </div>

    );
  };
  
  export default OneGame;
//   ${id}
//${findGame}