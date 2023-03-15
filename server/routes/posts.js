import express from 'express'
// const express = require('express');
import auth from '../middleware/auth.js'

import { getPostsBySearch, getPosts, createPost, updatePost ,deletePost, likePost} from '../controllers/posts.js';
// const {getPosts} = require ('../controllers/posts.js')
const router = express.Router()


router.get('/search', getPostsBySearch)
router.get('/',getPosts)
router.post('/',auth,createPost)
router.patch('/:id',auth,updatePost)
router.delete('/:id',auth,deletePost)
router.patch('/:id/likePost',auth,likePost)
// module.exports=router;
export default router;