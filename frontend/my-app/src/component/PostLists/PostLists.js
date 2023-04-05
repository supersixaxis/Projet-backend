import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./styles.module.css";
import DeletePostButton from "../DeletePostButton/DeletePostButton";
//import EditPostButton from "../EditPostButton/EditPostButton";


const PostsList = () => {

  const [data, setData] = useState([]); // on récupère les données de l'api et on est les stock dans le useState
  
  function handleDelete(postId) {
    // Mettre à jour la liste des posts
    window.location.reload()
  }
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
    <div  className={styles.container_post}>
      <h1>Data from API:</h1>
      <ul className={styles.post}>
        {data.map(post  => (
          <li key={post._id}>{post.author} :  
          <p>{post.message}</p> Post crée le : {post.createdAt}   
          {post.likers}  <DeletePostButton postId={post._id} onDelete={handleDelete}/>
          {/* <EditPostButton postId={post._id} /> */}
          </li>
         
        ))}
      </ul>
    </div>
  );
}

export default PostsList;