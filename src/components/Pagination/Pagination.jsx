import React, { useState } from 'react'
import './Pagination.css'
const Pagination = ({totalArts,artsPerPage,paginate,active}) => {
    const [selectedButton,setSelectedButton] = useState(null)
    const pageNumbers = []
  const count =  Math.ceil(totalArts / artsPerPage)
  
  
    for(let i = 1; i <= count ; i++){
        pageNumbers.push(i)
        
    }
    console.log(pageNumbers)

  return (
    <div>
        <ul className="pagination">
            {
                pageNumbers.map(number =>
                    <div className='page-item' key={number}>
                        <div onClick={() => paginate(number) } className={active === number ? "page-link-act" : "page-link"}>{number}</div>
                    </div>
                )
            }
        </ul>
    </div>
  )
}

export default Pagination