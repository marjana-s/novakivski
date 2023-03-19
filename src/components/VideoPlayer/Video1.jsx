import React from 'react'
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
function Video1() {
    const videoId = 'LH0CeDbmhbI';
    const opts = {
      height: '529',
      width: '890',
      playerVars: {
        autoplay: 0,
      },
    };
  
    return <YouTube videoId={videoId} opts={opts} />;
}

export default Video1