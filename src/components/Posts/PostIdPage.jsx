import React from 'react'

import { useParams } from 'react-router-dom'

function PostIdPage() {
    const params = useParams()
    
    
    


  
    
  return (
    <div>
      <h1>posts page ID = {params.id}</h1>
        <div>hello</div>
      
      
       <div>
          
        </div>
      
    </div>
  )
}

export default PostIdPage