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
      const { data } = await axios.get(`https://wbs-final-game-back.herokuapp.com/api/games/${id}`);
      setLoading(true);
      console.log(data);
      setGame(data);
      console.log(`from oneGame ${game}`);
      setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong with your game")
    }
  };
  getGame();
  }, []); 
         
    // console.log(game.title);
    const findGame = game.title
    console.log(game.title);

    const oneGameTitle = `Virusinvaders`;
    console.log(oneGameTitle);

  useEffect(() => {
    const getScores = async () => {
    try {
      const { data } = await axios.get(`https://wbs-final-game-back.herokuapp.com/api/scores/${findGame}`);
      setLoading(true);
      setScores(data);
      console.log(data);
      console.log(`Name of one game ${scores}`);
      setLoading(false);
    } catch (error) {
      return alert ("Sorry something went wrong getting the games")
    }
  };
  getScores();
  }, []);


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
                              <div> {game} </div>
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