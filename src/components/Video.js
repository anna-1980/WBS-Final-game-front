import video from "../assets/Cell-bubble.mp4";

const Video = () => {
  return (
 <div className="displayContainer">     
    {/* <div className="withGame">

    <img src={picture} alt="picture" />
    </div> */}
    
     <div className="videoCover"></div>
     <div className="videoCover2"></div>
     <video src={video} width="500" height="500" className="video" controls></video>

 </div>
  );
};

export default Video;