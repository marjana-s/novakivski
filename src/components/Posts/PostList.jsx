import React, { useState } from 'react'
import PostItem from './PostItem';
import './Posts.css'
import { useNavigate } from 'react-router-dom'

  
const PostList=({posts})=> {

   const router = useNavigate()
  
  
    return (
      <div>
        
        <div className='post_list'>
            {posts.map(post =>
               <div  onClick={()=>{router(`/posts/${post.id}`)}} key={post.id} className={`list post-${post.id}`}>
               
                
                <PostItem  post={post} /> 
              </div>
            )}
        </div>
       
    </div>
    );
}

export default PostList