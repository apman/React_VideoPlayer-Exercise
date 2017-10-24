import React from 'react';
import ListItem from './ListItem';

import {ResourceList, Thumbnail, TextStyle, Link} from '@shopify/Polaris';

const ItemList = ({onItemSelect,items}) => {

  // stay away from for loops but use built-in iterator: <array>.map( function(item) ..) 
  /*
  var listItems = items.map( (item, index) => {   // map returns an array with the results!
       
    return (
      item   // .map loop might be redundant - that would just build the same array as the original items ...
      // <ListItem 
      //   key={index}
      //   item={item} 
      //   onItemSelect={onItemSelect} />
      // //  REMEMBER:  key is something React needs to uniquely identify each list item (could be  
      // // populated with anything that results in a unique id) 
    )
  })
  */
  
  return (

    <ResourceList
      items={items}
      renderItem={(item, index) => {
        return (
          <Link onClick={() => onItemSelect(index)}>
            <ResourceList.Item key={index} {...item} />
          </Link>
        )
      }}
      />

  )
}

export default ItemList;
