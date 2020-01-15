import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from "prop-types"

function YoutubePlayer({videoId}) {
    const opts = {
      height: 'auto',
      width: '100%',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
      />
    );

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

YoutubePlayer.defaultProps = {
    videoId: ``,
  }
  
  YoutubePlayer.propTypes = {
    videoId: PropTypes.string.isRequired,
  }

export default YoutubePlayer
