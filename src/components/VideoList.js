import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {

    const videoListItem = props.videos.map( video => {
        return <VideoItem key={video.etag}  video = {video}  />
    } )

    return (
        <ul>
            { videoListItem }
        </ul>
    )
}

export default VideoList