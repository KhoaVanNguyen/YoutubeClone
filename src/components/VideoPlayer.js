import React from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ video }) => {
    // console.log(video)
    const { videoId } = video.id
  return (
    <Youtube videoId= { videoId } /> // defaults -> null
  );
};

export default VideoPlayer;
