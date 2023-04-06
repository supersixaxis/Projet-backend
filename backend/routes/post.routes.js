const express = require ('express');
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require('../controllers/post.controllers');
const router = express.Router();
const auth = require('../middleware/auth')


router.get("/", getPosts);
router.post("/",auth,setPosts);
router.put('/:id', auth, editPost);
router.delete("/:id", auth, deletePost); 
router.patch("/like-post/:id", auth, likePost);
router.patch("/dislike-post/:id", auth,  dislikePost);


module.exports = router;