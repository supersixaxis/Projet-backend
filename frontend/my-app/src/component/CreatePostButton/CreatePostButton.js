import React, { useState } from "react";
import axios from "axios";

function CreatePostButton() {
  const [author, setTitle] = useState("");
  const [message, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/post", {
        author,
        message,
      });
      console.log("Post created:", response.data);
      // Faire quelque chose avec la réponse, par exemple rediriger vers la page du nouveau post.
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostButton;