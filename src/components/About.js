 
const About = ({games}) => {
    return (
      <div className="pageHead">
    
        <div className="creators"></div>
           
                   
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
        
          
         
      </div>
    );
  };
  
  export default About;
  