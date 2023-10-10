import React from 'react';

function Video(props) {
  return (
    <div>
      <video src={props.src} controls autoPlay />
    </div>
  );
}

export default Video;
