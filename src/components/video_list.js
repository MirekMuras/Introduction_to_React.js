import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    const VideoItem = props.videos.map((video) => {
        return <VideoListItem key={video.etag} video = {video} />            //use a unique key for the data
    });

    return (
        <ul className="col-md-4 list-group">
           {VideoItem} 
        </ul>
    );
};

export default VideoList;