import React from 'react';
import ListItem from './list_item';

const VideoList = (props) => {

  // stay away from for loops but use built-in iterator: <array>.map( function(item) ..) 
  var items = props.videos.map( (video) => {   // map returns an array with the results!
   
    // temp  'translating' video info to generic 'item' info to feed into reusable list_item 
    let item = video;
    item.key = video.etag;
    item.title = video.snippet.title;
    item.thumbURL = video.snippet.thumbnails.default.url;
    
      
    return (
      <ListItem 
        key={item.key}
        item={item} 
        onItemSelect={props.onVideoSelect} />
      //  REMEMBER:  key is something React needs to uniquely identify each list item (could be  
      // populated with anything that results in a unique id) 
    )
  })
  
  return (
    <ul>
      {items}
    </ul>
    // items is an array of ListItems, but React knows to render the contents of an array
  )
}

export default VideoList;