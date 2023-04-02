import React from 'react'

const Pagination = ({totalArts,artsPerPage,paginate}) => {

    const pageNumbers = []
  const counbt =  Math.ceil(totalArts / artsPerPage)
  
    for(let i = 1; i <= counbt ; i++){
        pageNumbers.push(i)
        
    }
    console.log(pageNumbers)

  return (
    <div>
        <ul className="pagination">
            {
                pageNumbers.map(number =>
                    <li className='page-item' key={number}>
                        <div onClick={() => paginate(number) } className="page-link">{number}</div>
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default Pagination