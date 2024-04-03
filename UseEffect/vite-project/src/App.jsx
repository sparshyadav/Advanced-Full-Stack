import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // Pass an empty dependency array

  return (
    <>
      <h1>Fetch Data</h1>
      <div className="container">
        {posts ? (
          <ul>
            {posts.map((post) => (
              <Onepost key={post.id} title={post.title} />
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

function Onepost(props) {
  return <li>{props.title}</li>;
}

export default App;

