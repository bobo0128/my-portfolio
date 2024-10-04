import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <video className="video-background" autoPlay loop muted>
      <source src={`${process.env.PUBLIC_URL}/videos/background.webm`} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
