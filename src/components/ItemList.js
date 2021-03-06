import React from 'react';
import ListItem from './ListItem';

const ItemList = ({onItemSelect,items}) => {

  // stay away from for loops but use built-in iterator: <array>.map( function(item) ..) 
  var listItems = items.map( (item, index) => {   // map returns an array with the results!
       
    return (
      <ListItem 
        key={index}
        item={item} 
        onItemSelect={onItemSelect} />
      //  REMEMBER:  key is something React needs to uniquely identify each list item (could be  
      // populated with anything that results in a unique id) 
    )
  })
  
  return (
    <ul>
      {listItems}
    </ul>
    // items is an array of ListItems, but React knows to render the contents of an array
  )
}

export default ItemList;
