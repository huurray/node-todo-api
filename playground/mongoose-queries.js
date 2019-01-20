const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')

var id = '5c43df0894dccd6c7d6f8ee3'

if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log(todos)
// })

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log(todo)
// })

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log('id not found')
    }
    console.log(todo)
  })
  .catch(e => console.log(e))
