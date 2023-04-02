import React from 'react'
import ArtGalleryItem from './ArtGalleryItem'

const ArtGalleryList = ({arts}) => {
  return (
    <div>
       <div className="art_gallery_list">

            {
              arts.map((art,i) =>
                <div key={i}>
                  <ArtGalleryItem art={art}></ArtGalleryItem>
                </div>
                )
            }
        </div>

    </div>
  )
}

export default ArtGalleryList