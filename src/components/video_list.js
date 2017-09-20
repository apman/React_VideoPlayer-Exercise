import React from 'react';
import ListItem from './list_item';

const VideoList = (props) => {

  // stay away from for loops but use built-in iterator: <array>.map( function(item) ..) 
  var videoItems = props.videos.map( (video) => {   // map returns an array with the results!
    return (
      <ListItem 
        key={video.etag}
        video={video} 
        onVideoSelect={props.onVideoSelect} />
      //  REMEMBER:  key is something React needs to uniquely identify each list item (could be  
      // populated with anything that results in a unique id) 
    )
  })
  
  return (
    <ul>
      {videoItems}
    </ul>
    // videoItems is an array of ListItems, but React knows to render the contents of an array
  )
}

export default VideoList;