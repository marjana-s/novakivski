import React from 'react'
import './Posts.css'

function PostItem(props) {
    
  return (
    <div>
      <div >
          <div>
            {props.post.title}
          </div>  
        </div>
    </div>
  )
}

export default PostItem