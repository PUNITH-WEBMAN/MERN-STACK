const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    message:{
        type: String,
        require: true,
        minLength: 4,
        maxLength: 20
   }
})
const Todo = mongoose.model('todo', todoSchema)
module.exports = Todo
