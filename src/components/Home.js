 import Video from "./Video";
 import Video2 from "./Video2";

const Home = () => {




    return (
      <div className="homePage">
        
          <div className="spacer"></div>
          <div className="textBackground">
          <h4>  Welcome to the Science Arcade</h4><i class="fas fa-flask"></i>  
        </div>
        <Video />
        <div className="infoPanels">
          <div className="paragraph">
            <h1>Science Facts</h1>
            <p>Viruses - a tiny things carrying their own genetic material.</p> 
            <p>Genetic material ia a substance that has an information of of how you look and how to make more of you.  </p>
            <p>Curious thing about Viruses is that till now, we are still not sure if they are already alive or not quite yet. It is because of their super simple build.</p>
           <p>However Viruses need a way to make more of themselves, and for that they need a HOST.</p>
           <p>HOST - is another, more complex organism, Bacterium or a Human that Virus can use to reproduce.</p>
           <p>For that purpose Virus has to infect/enter a cell, then it multiplies inside and leaves, that part is often quite bad fir the HOST. </p>
          <p>Therefore it is better to avoid getting infected by a Virus, even though our immune system gan take care of most of them.</p>
          
          </div>
           <Video2 />
        </div>
      </div>   
    );
  };
  
  export default Home;
  