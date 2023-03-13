import React, { useState } from 'react'
import PostItem from './PostItem';
import './Posts.css'

const PostList=({posts})=> {

   
  
  
    return (
      <div>
        
        <div className='post_list'>
            {posts.map(post =>
               <div key={post.id} className={`post-${post.id}`}>
               
                
                <PostItem  post={post} /> 
              </div>
            )}
        </div>
       
    </div>
    );
}

export default PostList