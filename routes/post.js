const express = require('express');

const {getPosts,createPost} = require('../controllers/post');
const validator = require('../validator');

const router = express.Router()

router.get('/api',getPosts )
router.post('/api/post', validator.createPostValidator,createPost )

module.exports = router;
