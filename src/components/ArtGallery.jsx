import React, { useState } from "react"
import Art1 from "../components/img/Art1.png"
import Art2 from "../components/img/Art2.png"
const Artgallery = () => {
    const galleryImg = [
        {
            "name": "galleryImg1",
            "image": Art1
        },
        {
            "name": "galleryImg2",
            "image": Art2
        }
    ]
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setopenModal] = useState(false)
    return(
        <div>
            {
                galleryImg && galleryImg.map((slide, index) => {
                    return(
                        <div key={index}>
                            <img scr={slide.image}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Artgallery