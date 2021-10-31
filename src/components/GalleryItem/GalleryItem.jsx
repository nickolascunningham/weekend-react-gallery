import React, { useState } from 'react'

const GalleryItem = ({ gallery }) => {

    const [showImg, setShowImg] = useState(true)

    const handleImageClick = () => {
        setShowImg(!showImg)
    }
  
    return (
        <div className='gallery'>
            {
               showImg ? <img src={gallery.path} alt={gallery.path} onClick={handleImageClick} />
               : <p>{gallery.description}</p>
            }
            <button>love it!</button>
        </div>
    )
}

export default GalleryItem
