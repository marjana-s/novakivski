import React from 'react'

const ArtGalleryItem = ({art}) => {
  return (
    <div>
       {art.name.common}
       <img style={{height:30}} src={art.flags.png} alt="" />
    </div>
  )
}

export default ArtGalleryItem