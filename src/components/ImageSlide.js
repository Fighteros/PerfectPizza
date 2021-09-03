import React from 'react'


const ImageSlide = ({ url, name }) => {

    return (
        <div className="image-slide">
            <p>{name}</p>
            <img src={url} alt="cur img" />
        </div>
    )
}

export default ImageSlide
