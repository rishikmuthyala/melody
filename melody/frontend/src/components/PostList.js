import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: Fetch posts from API
    const fetchPosts = async () => {
      // Simulated API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data.slice(0, 10));
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;