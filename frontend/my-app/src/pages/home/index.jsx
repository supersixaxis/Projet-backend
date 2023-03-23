//import { useContext } from 'react';
//import Api from '../../context/contextApi';
import PostsList from '../../component/PostLists/PostLists';
import CreatePostButton from '../../component/CreatePostButton/CreatePostButton.js'
//import styles from "./styles.module.css";
function Home() {

  return (
    <div>
      <CreatePostButton />
      <PostsList />
    </div>
  );
}

export default Home

