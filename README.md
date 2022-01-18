# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


for the iframe : 
       
       <iframe  
       title='game' 
       src="https://angry-viruses.netlify.app/"
       id="iframe1"></iframe>

       netlify API for auto deployment
       https://docs.netlify.com/api/get-started/#zip-file-method

       https://docs.netlify.com/api/get-started/#deploy-with-the-api

       https://virus-invaders.netlify.app/
       

       - display ONE GAME 
       - in ONE GAME DISPLAY use iframe (game should be the only thing there )
       - tumbnails generation 
       - 
       - from th einside the game sent data to database
        - user name 
        - id 
        - score

        - get the input to work in phaser

18Jn2022 - after a bigg hasstle I finally have the specific icon and a thimbnail for my app :) 

-- to redirect ther user to the newly deployed game

https://v5.reactrouter.com/web/api/Hooks


/// struggle to redirect user after loadiung the game
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
        "http://localhost:5000/api/games",
        formData
      );
      setNewgame(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    console.log(newgame.title.value);
  };

 const rendering = () => {
  if (loading === true){
    return (<div className="bouncer">
    <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   </div>
  )}
 }

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
         {rendering()}
          
        </div>
    </div>
  );
};

export default PostGames;

// loading  ? (
//   <div className="bouncer">
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//     <div></div>
//   </div>
// ) : (
//   <Link
//   to={`/Games/${newgame._id}`} key={newgame._id}>
//  <div className="iframeDiv">
//     <iframe  
//         id="allFrames"
//         title='game' 
//         src={newgame.url}
//         ></iframe>
//  </div>
//  </Link>
// )
