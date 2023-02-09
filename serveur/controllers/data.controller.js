const Data = require('../models/data')

const savePost = async (req, res) => {
    try {
        await Data.findOneAndUpdate(
            { userId: req.user._id }, 
            { $push: { posts: { text: res.answer, keywords: req.body?.keywords } } }, 
            { upsert: true });
        return res.json({status: 'ok', answer: res.answer})
    } catch (err) {
        console.log(err)
    }
};

const getPosts = async (req, res) => {
    try {
        const data = await Data.findOne({ userId: req.user._id })
        return res.json(data?.posts)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { savePost, getPosts }