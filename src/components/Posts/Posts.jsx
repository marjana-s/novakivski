import React, { useState } from 'react';

const posts = [
  {id:1, title: 'Post 1', category: 'food' },
  {id:2, title: 'Post 2', category: 'travel' },
  {id:3, title: 'Post 3', category: 'food' },
  {id:4, title: 'Post 4', category: 'music' },
];

const PostList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div>
      <div>
        <button onClick={() => handleCategorySelect('all')}>
          All
        </button>
        <button onClick={() => handleCategorySelect('food')}>
          Food
        </button>
        <button onClick={() => handleCategorySelect('travel')}>
          Travel
        </button>
        <button onClick={() => handleCategorySelect('music')}>
          Music
        </button>
      </div>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
