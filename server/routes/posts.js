import express from 'express'
// const express = require('express');

import { getPosts } from '../controllers/posts.js';
// const {getPosts} = require ('../controllers/posts.js')
const router = express.Router()

router.get('/',getPosts)

// module.exports=router;
export default router;