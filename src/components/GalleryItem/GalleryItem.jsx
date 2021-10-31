import React, { useState } from 'react'
import axios from 'axios'

const GalleryItem = ({ gallery }) => {


    const[showImg, setShowImg]=useState( true );

    const toggleImage = () => {
        console.log( 'in toggleImage' );
        setShowImg( !showImg );
    }



    const handleLike = (id) => {
        axios.put(`http://localhost:5000/gallery/like/${id}`)
        .then(() => window.location.reload())
    }
  // window.location.reload reloads the page with updated amount of people who love the image

    return (
        //ternary operator
        <div className='gallery'>
            {
               showImg ? 
               <img src={ gallery.path } alt={ gallery.path } onClick={ toggleImage } />
               : <h1 onClick={ toggleImage }>{ gallery.description }</h1>

            }
            <button onClick={() => handleLike( gallery.id) }>love it!</button>
           
              <p> { gallery.likes } {( gallery.likes > 1 ) ?  "people" : ( gallery.likes === 1 ) ? "person" : "nobody " } love this </p>
            {/* if likes are more than 1, then "people". If there is only 1 like, "person". If there are no likes at all, "nobody" */}
        </div>
    )
}

export default GalleryItem

