import video from "../assets/Cell-bubble.mp4";

const Video = () => {
  return (
 <div className="displayContainer">     
 
     <div className="videoCover"></div>
     <div className="videoCover2"></div>
     <video src={video}  className="video" type="video/mp4" controls></video>

 </div>
  );
};

export default Video;