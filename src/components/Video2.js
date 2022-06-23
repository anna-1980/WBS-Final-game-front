import video from "../assets/Viruses02.mp4";

const Video2 = () => {
  return (
 <div className="displayContainer">     
    
    
     <video src={video}  className="video" type="video/mp4" controls></video>

 </div>
  );
};

export default Video2;