import React from 'react';

const ListItem = ({video, onVideoSelect}) => {  
    //  REMEMBER:   {video} is a React shortcut to say props has a property called 
    //              'video' and basically defining a constant video = props.video
    //              Same for multiple properties ... just separate with commas
    //  TODO:  but this makes the ListItem not re-usable! Change!
    // --> would it be better then, if the ListItem expected three separate
    //     props: thumbURL, title, and what to do on click (rather than a 
    //     video URL) ??

  const thumbURL = video.snippet.thumbnails.default.url;    
  const title = video.snippet.title;    

  return (
    <li onClick={() => onVideoSelect(video)}>
      <img src={thumbURL} />
      {title}
    </li>
    // "snippet.title" reflects the structure of the objects returned by YouTube
  )
}

export default ListItem
