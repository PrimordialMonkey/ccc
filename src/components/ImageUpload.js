import React from 'react'
import {ImageUploading} from 'react-images-uploading'
import { useEffect, useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [img, setImg] = useState("");
  useEffect(() => {
      if(images.length < 1)
          return;
      const newImageUrls = [];
      images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
      setImageURLs(newImageUrls);

  }, [images]);


  const onImageChange = (e) => {
      setImages([...e.target.files]);
  }

  return (
      <div>
          <input type='file'
          accept='image/*'
          multiple
          onChange={onImageChange}
          />
          {
            imageURLs.map(imageSrc => <img style={{marginTop: 20, marginLeft: 100, width:400, height:200}} src = {imageSrc} />)
          }
          
      </div>
  )
}

export default ImageUpload
