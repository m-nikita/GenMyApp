const express = require("express")
const router = express.Router()

const { userLogin, userRegister } = require("./controllers/user.controller")
const auth = require("./controllers/auth.controller")
const { savePost, getPosts } = require("./controllers/data.controller")
const { generateAnswer, generatePost } = require("./controllers/openai.controller")


router.get('/', (req, res) => {
    res.send("Welcome to your API")
})

router.post('/auth/login', userLogin)
router.post('/auth/register', userRegister)

router.post('/posts', auth, getPosts)

router.post('/openai/generate/answer', auth, generateAnswer)
router.post('/openai/generate/post', auth, generatePost, savePost)

module.exports = router;