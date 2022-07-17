const express =  require('express')
const blogsController = require('../controllers/blogs.js');
const router = express.Router();

router.get('/blogs',blogsController.getAllDoc)


module.exports = router