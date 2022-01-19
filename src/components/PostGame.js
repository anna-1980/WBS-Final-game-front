import { useState } from "react";
import { Link } from "react-router-dom";
// import { useForm } from 'react-hook-form';
import axios from "axios";

const PostGames = () => {
  const [loading, setLoading] = useState(false);
  const [newgame, setNewgame] = useState(null);
  

  const uploadGame = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", e.target.elements.name.value);
    formData.append(
      "game",
      e.target.elements.game.files[0],
      e.target.elements.game.files[0].name
    );
    formData.append("author", e.target.elements.author.value);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://wbs-final-game-back.herokuapp.com/api/games",
        formData, 
        {maxContentLength: Infinity,
          maxBodyLength: Infinity}
      );
      setNewgame(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    // console.log(newgame.title.value);
  };

  return (
    <div className="pageHead">
      <h1> ⭐ Post a new game ⭐</h1>

      <div className="form2">
        <form onSubmit={uploadGame}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="gameName">
            <label htmlFor="name" className="label2">Name of your game</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name of your game"
              required
            />
          </div>
          <div className="authorName">
            <label htmlFor="author" className="label2">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Your name"
              required
            />
          </div>
          <div className="uploadFile">
            <label htmlFor="email" className="label2">upload file</label>
            <input
              className="upload"
              type="file"
              name="game"
              placeholder="choose file ZIP file to upload"
              required
            />
          </div>
          <button className="uploadButton" type="submit">
            {" "}
            UPLOAD TO SCIENCE ARCADE{" "}
          </button>
        </form>
      </div>
      <div>
          {!loading && newgame ? (
            <h4>
            <Link to={`/Games/`} >Upload complete go see your game is there
            </Link>
            </h4> 
            ) : (
              
              <div></div>
          )}

              {loading && !newgame ? (

              
             
          
                <div className="bouncer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div> 
                
              

              ) : (

              
                <div></div>
                
                
              )}
        </div>
    </div>
  );
};

export default PostGames;

// "http://localhost:5000/api/games"