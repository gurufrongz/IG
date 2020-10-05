import React, { useState, useRef } from 'react';
import VideoHeader from "./VideoHeader";
import Videofooter from "./VideoFooter";
import './VideoCard.css';

function VideoCard({url, likes, shares, channel,
avatarSrc, song }) {
   const [isVideoPlaying, setIsVideoPlaying] =
   useState(false);
    const videoRef = useRef(null);
    
        const onVideoPress = () => {
            if (isVideoPlaying) {                
               videoRef.current.pause();
                setIsVideoPlaying(false)
            } else {                
                videoRef.current.play();
                setIsVideoPlaying(true)
            }
        };
    return (
        <div className="videoCard">
            <VideoHeader />
            <video 
            ref={videoRef}
            onClick={onVideoPress}
            className="videoCard__player"
            src={url}
            alt='IG Siraphat VDO'
            loop
            />     

            <Videofooter 
             channel={channel}
             likes={likes}
             shares={shares}
             avatarSrc={avatarSrc}
             song={song}                                    
            />   
        </div>
    )
}

export default VideoCard
