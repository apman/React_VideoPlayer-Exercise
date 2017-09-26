import React from 'react';

const ListItem = ({item, onItemSelect}) => {  

  const thumbURL = item.thumbURL;    
  const title = item.title;    
  
  const onItemClick = () => onItemSelect(item);

  return (
    <li onClick={onItemClick}>
      <img src={thumbURL} />
      {title}
    </li>
  )

}

export default ListItem
