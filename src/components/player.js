import React from 'react';

const Player = ({video}) => {    // {} to immediately expose props.video as var you can use
                                 //  REMEMBER   this is called object destructuring 
                                 //  http://exploringjs.com/es6/ch_destructuring.html#sec_more-obj-destructuring
  
  if (!video) {                               
    return (
      <div>Loading ...</div>
    )  
  }

  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;  // ES6 equiv of ^   REMEMBER  
  const {title, description} = video.snippet;  // short for {title: title, description: description}

  return (
    <div>
      <div>
        <iframe src={url}></iframe>
      </div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default Player;
