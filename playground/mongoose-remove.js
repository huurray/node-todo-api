const { ObjectID } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')

Todo.findOneAndRemove({ _id: '5c43df0894dccd6c7d6f8ee3' }).then(todo => {
  console.log(todo)
})

Todo.findByIdAndRemove('5c43df0894dccd6c7d6f8ee3').then(todo => {
  console.log(todo)
})
