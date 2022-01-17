
const PostGames = () => {
  return (
    <div className="pageHead">
      <h1> ⭐ Post a new game ⭐</h1>
      
      <div className="form">
        <form name="contact" method="post" >
        <input type="hidden" name="form-name" value="contact" />
          <div >
            <label htmlFor="name">Name of your game</label> 
            <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Enter name of your game" 
        required/>
          </div>
          <div >
            <label htmlFor="email" >zip file to uploead</label>  
            <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="choose file ZIP file to upload" 
            required />
          </div>
        </form>
      </div>
      <div>
        <button className="postButton"> POST </button>
      </div>
    </div>
  );
};

export default PostGames;
