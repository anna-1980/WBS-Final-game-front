

import video from "../video/VirusInvaders.mp4";

const Video = () => {
  return (
 <div className="displayContainer">     
    {/* <div className="withGame">

    <img src={picture} alt="picture" />
    </div> */}
   <div className="video">
   <video src={video} width="500" height="500" controls></video>
   </div>
 </div>
  );
};

export default Video;