import React from 'react'

const VideoItem = (props) => {
    console.log(props.video)
    return (
        <li> { props.video.etag  } </li>
    )
}
export default VideoItem