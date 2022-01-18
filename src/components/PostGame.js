import { useState } from "react";
// import { useForm } from 'react-hook-form';
import axios from "axios";

const PostGames = () => {
  const [loading, setLoading] = useState(false);

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
        "http://localhost:5000/api/games",
        formData
      );
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="pageHead">
      <h1> ⭐ Post a new game ⭐</h1>

      <div className="form">
        <form onSubmit={uploadGame}>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">Name of your game</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name of your game"
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">zip file to uploead</label>
            <input
              className="upload"
              type="file"
              name="game"
              placeholder="choose file ZIP file to upload"
              required
            />
          </div>
          <button className="postButton" type="submit">
            {" "}
            POST{" "}
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default PostGames;
