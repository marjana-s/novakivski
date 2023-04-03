import React, { useState } from 'react'
import './ArtGallery.css'
const ArtGalleryItem = ({art,setActiveItemChild,activeItem}) => {
  const [active,setActive] = useState(false)
  
  return (
    <div className='art_item'>
         <div onClick={()=> setActive(true)} className={`art_item_info ${active ? "active" : "non_act"}`} >
        <img  src={art.img} alt="" />
       </div>
       
    </div>
  )
}

export default ArtGalleryItem