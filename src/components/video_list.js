import React from 'react';
import VideoListItem from './video_list_item';

//@dev:simple component take input component and render it to the JSX component. Super fast
const VideoList = (props) => {
    const VideoItem = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video = {video} />            //use a unique key for the data
        ); 
    });

    return (
        <ul className="col-md-4 list-group">
           {VideoItem} 
        </ul>
    );
};

export default VideoList;