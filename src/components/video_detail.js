import React from 'react';
//import { DESTRUCTION } from 'dns';

const VideoDetail = ({video}) => {
    //@dev: check if video NOT provided
    if(!video) {
        return <div>Loading...</div>;
    }

    const title = video.snippet.title;
    const description = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>                
            </div>

            <div className="details">
                <div>{title}</div>                             
                <div>{description}</div>
            </div>     
        </div>
    );
};

export default VideoDetail;
