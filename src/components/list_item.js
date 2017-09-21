import React from 'react';

const ListItem = ({item, onItemSelect}) => {  

  const thumbURL = item.thumbURL;    
  const title = item.title;    

  return (
    <li onClick={() => onItemSelect(item)}>
      <img src={thumbURL} />
      {title}
    </li>
  )
}

export default ListItem
