import express from 'express'
// const express = require('express');

import { getPosts, createPost, updatePost ,deletePost, likePost} from '../controllers/posts.js';
// const {getPosts} = require ('../controllers/posts.js')
const router = express.Router()

router.get('/',getPosts)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likePost',likePost)
// module.exports=router;
export default router;