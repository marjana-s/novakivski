import React from 'react'
import ArtGalleryItem from './ArtGalleryItem'
import './ArtGallery.css'
const ArtGalleryList = ({arts,setActiveItemChild,activeItem}) => {
  
  return (
    <div>
       <div className="art_gallery_list">

            {
              arts.map((art) =>
                <div  className='art_items' key={art.id}>
                  <ArtGalleryItem  setActiveItemChild={setActiveItemChild} activeItem={activeItem}  art={art}></ArtGalleryItem>
                </div>
                )
            }
        </div>

    </div>
  )
}

export default ArtGalleryList