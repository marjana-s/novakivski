import React from 'react'
import {filterPosts} from './PostsPage'
import './Posts.css'

const PostFilter=({filterPosts})=> {
  return (
    <div > 
        <div className='filter_component'>
        <button className='filter_button' onClick={()=> filterPosts('all')}>Всі матеріали </button>
        <button className='filter_button' onClick={()=> filterPosts('food')}>Статті </button>
        <button className='filter_button' onClick={()=> filterPosts('music')}>Відео</button>
        <button className='filter_button' onClick={()=> filterPosts('all')}>Лекції</button>
        <button className='filter_button' onClick={()=> filterPosts('food')}>Огляд видань</button>
        <button className='filter_button' onClick={()=> filterPosts('music')}>Інші матеріали</button>
        </div> 
  </div>
  )
}

export default PostFilter