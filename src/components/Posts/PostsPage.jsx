import React, { useState } from 'react';
import PostFilter from './PostFilter';
import PostList from './PostList';
import './Posts.css'

const PostsPage = () => {

  
  const [posts,setPosts] = useState([{id:1, title: 'Post 1', category: 'food' },
  {id:2, title: 'Post 2', category: 'travel' },
  {id:3, title: 'Post 3', category: 'food' },
  
])
  const [filter,setFilter] = useState({category:''})
  const [fileteredPosts,setFilterteredPosts] = useState(posts)
  const [ currentCategory,setCurrentCategory] = useState('all')

  const filterPosts =(category) =>{
    if(category === 'all'){
      setFilterteredPosts(posts)
    }else{
      setFilterteredPosts(posts.filter(post => post.category === category))
    }
    setCurrentCategory(category)
  }
    
     

  return(
    <div>
      <header style={{height:80,background:'blue'}}></header>
        <div className="Post_page">
          <h2 className='Post_title'>Статті</h2>
          <PostFilter filterPosts={filterPosts}></PostFilter>
          <PostList  posts={fileteredPosts}></PostList>
        </div>
        
    </div>
  )
};

export default PostsPage;
