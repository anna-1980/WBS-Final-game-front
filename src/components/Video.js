import video from "../assets/Sequence01.mp4";

const Video = () => {
  return (
 <div className="displayContainer">     
 
     <div className="videoCover"></div>
     <div className="videoCover2"></div>
     <video src={video}  className="video" type='video/mp4'  controls></video>

 </div>
  );
};

export default Video;

{/* <video src={video}  className="video" type='video/mp4; codecs="AAC, H.264"'  controls></video> */}