import React, { useState, useEffect } from "react";
import axios from 'axios';

const PostsList = () => {

  const [data, setData] = useState([]); // on récupère les données de l'api et on est les stock dans le useState

  useEffect(() => {
    axios.get('http://localhost:5000/post')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map(post => (
          <li key=''>{post.author} {post.message} {post.createdAt}   {post.likers}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;