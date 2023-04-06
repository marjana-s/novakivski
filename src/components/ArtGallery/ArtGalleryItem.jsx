import React, { useState } from 'react'
import './ArtGallery.css'
const ArtGalleryItem = ({art, onClick}) => {
  // const [active,setActive] = useState(false)
  
  return (
    <div className='art_item'>
         <div  className="art_item_info"  onClick={onClick} >
        <img  src={art.img} alt="" />
       </div>
       
    </div>
  )
}

export default ArtGalleryItem