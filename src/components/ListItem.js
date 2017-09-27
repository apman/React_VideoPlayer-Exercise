import React from 'react';

const ListItem = ({item, onItemSelect}) => {  

  const {thumbURL, title} = item;
   
  const onItemClick = () => onItemSelect(item);

  return (
    <li onClick={onItemClick}>
      <img src={thumbURL} />
      {title}
    </li>
  )

}

export default ListItem
