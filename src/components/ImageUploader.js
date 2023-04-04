import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

const ImageUploader = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const hiddenFileInput = React.useRef(null);
    const [img, setImg] = useState(false);
    useEffect(() => {
        if(images.length < 1)
            return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);

    }, [images]);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
      };

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const renderComp = () => {
        if(images.length < 1)
        {
            setImg(true);
        }
    }
    return (
        <div>
            <button onClick={handleClick} style={{marginLeft:120, marginTop: 20, width:200, height: 200, borderRadius:400/2}} type="button" className="btn btn-outline-secondary">ใส่รูป</button>
            <input type='file'
            accept='image/*'
            multiple
            ref={hiddenFileInput}
            onChange={onImageChange}
            style={{display: 'none'}} 
            />
            {
                imageURLs.map(imageSrc => <img style={{cursor:'pointer', marginTop: 20, marginLeft: 100, width:200, height:200, borderRadius:400/2}} src = {imageSrc} onClick = {handleClick} />)
            }
            
        </div>
    )
}

export default ImageUploader
