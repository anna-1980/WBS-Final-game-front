import Footer from "./Footer";
import Iframe from 'react-iframe';

const Home = () => {
  const getLocalStorage = localStorage.getItem('Player-Name');
  console.log(localStorage.value);
    return (
      <div  className="MainDiv">
    
     <div>
from local storage of embedded url        </div>
<div> this: {}</div>  
        <div>
        <iframe   src="https://unruffled-euler-dd8f58.netlify.app/"></iframe>
        </div>
 
      </div>
    );
  };
  
  export default Home;
  