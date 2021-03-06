import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
//   console.log(video);
  const { snippet } = video;
  const imgUrl = snippet.thumbnails.default.url;
  return (
    <li  onClick={ () => onSelectVideo(video)  }  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {" "}{snippet.title}{" "}
          </div>
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
