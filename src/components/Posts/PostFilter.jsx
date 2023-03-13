import React from 'react'
import {filterPosts} from './PostsPage'
const PostFilter=({filterPosts})=> {
  return (
    <div> 
        <div>
        <button onClick={()=> filterPosts('all')}>all</button>
        <button onClick={()=> filterPosts('food')}>food</button>
        <button onClick={()=> filterPosts('music')}>music</button>
        <button onClick={()=> filterPosts('all')}>all</button>
        <button onClick={()=> filterPosts('food')}>food</button>
        <button onClick={()=> filterPosts('music')}>music</button>
        </div> 
  </div>
  )
}

export default PostFilter