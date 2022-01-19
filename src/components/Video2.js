import video from "../video/whatAreViruses.mp4";

const Video2 = () => {
  return (
 <div className="displayContainer">     
    
    
     <video src={video}  className="video" controls></video>

 </div>
  );
};

export default Video2;