import React from 'react';

const GalleryItem = ({ farm, server, id, secret, title }) => {
    const ImageUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg` ;
    return (
        <li>
        <img key={id} src={ImageUrl} alt={title}  />
        </li>
    );
  };

export default GalleryItem
