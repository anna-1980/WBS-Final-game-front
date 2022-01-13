// import Canvas from './Canvas';
// import OneGame from './OneGame';
import Video from "./Video";
const Game = () => {
  return (
    <div className="pageHead">
  
      <div className="creators">
        <div> ⭐ Checking games ⭐</div>
       {/* <div ><Video /></div> */}
       
       <iframe  
       title='game' 
       src="https://angry-viruses.netlify.app/"
       id="iframe1"></iframe>

      <div>   
      <div className="footerDown"></div>
      </div>

      </div>
    </div>
  );
};

export default Game;
