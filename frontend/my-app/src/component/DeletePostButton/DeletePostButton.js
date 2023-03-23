
import axios from "axios";

function DeletePostButton({postId, onDelete }) {
  function handleClick() {
    axios.delete(`http://localhost:5000/post/${postId}`)
    .then(response => {
      onDelete(postId);
    })
    .catch(error => {
      console.log(error)
    })
  } 
  return (
      <button onClick={handleClick}>Supprimer</button>
  );
}

export default DeletePostButton;