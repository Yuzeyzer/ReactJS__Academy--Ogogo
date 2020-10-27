import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ACCESS_KEY, API_URL } from '../../credentials';

function Images({ className }) {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios
      .get(`${API_URL}/photos/?client_id=${ACCESS_KEY}&per_page=4`)
      .then((response) => setImages(response.data));
  };

  useEffect(() => fetchImages(), []);

  return (
    <div className={`${className}-wrapper`}>
      {images.map((item) => {
        const { id, urls, alt_description } = item;
        return <img className={className} src={urls.small} alt={alt_description} key={id} />;
      })}
    </div>
  );
}

export default Images;
