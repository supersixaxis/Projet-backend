import React, { useState, useEffect } from "react";
import axios from "axios";

function EditPostButton({ postId, onEdit }) {
  const [post, setPost] = useState(null);

  

  function handleClick() {
    // Mettre à jour le post
    axios.put(`http://localhost:5000/post/${postId}`, post)
      .then(response => {
        onEdit(postId, post);
      })
      .catch(error => {
        console.error(error);
      });
  }

  if (!post) {
    return null;
  }

  return (
    <div>
      <button onClick={handleClick}>Editer</button>
      <input
        type="text"
        value={post.author}
        onChange={event => setPost({ ...post, title: event.target.value })}
      />
      <textarea
        value={post.message}
        onChange={event => setPost({ ...post, body: event.target.value })}
      />
    </div>
  );
}

export default EditPostButton;