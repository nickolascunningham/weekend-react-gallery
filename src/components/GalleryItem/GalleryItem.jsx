import React, { useState } from 'react'
import axios from 'axios'

const GalleryItem = ({ gallery }) => {

    const [showImg, setShowImg] = useState(true)

    const handleImageClick = () => {
        setShowImg(!showImg)
    }

    const handleLike = (id) => {
        axios.put(`http://localhost:5000/gallery/like/${id}`)
        .then(() => window.location.reload())
    }
  // window.location.reload reloads the page with updated amount of people who love the image
    return (
        <div className='gallery'>
            {
               showImg ? <img src={gallery.path} alt={gallery.path} onClick={handleImageClick} />
               : <p>{gallery.description}</p>
            }
            <button onClick={() => handleLike(gallery.id)}>love it!</button>
           
              <p> {gallery.likes} {(gallery.likes > 1) ?  "people" : (gallery.likes === 1) ? "person" : "nobody " } love this </p>
            
        </div>
    )
}

export default GalleryItem
