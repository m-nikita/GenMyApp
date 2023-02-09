const mongoose = require('mongoose')
const User = require('./user')
const { postSchema } = require('./post')

const dataSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        posts: {type: [ postSchema ], default: []},
    },
    { collection: 'data' }
)

const Data = mongoose.model('Data', dataSchema)

module.exports = Data