import React from 'react'
import GalleryItem from '../../GalleryItem/GalleryItem'

const GalleryList = ({galleryData}) => {

    return (
        <div className='gallery_list'>
           {galleryData.map(gallery => <GalleryItem key={gallery.id} gallery={gallery}/>)}
        </div>
    )
}

export default GalleryList
