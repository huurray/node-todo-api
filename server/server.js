var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

var newTodo = new Todo({
  text: '  Edit this video  ',
  completed: true,
  completedAt: 123
})

newTodo.save().then(
  result => {
    console.log(result)
  },
  err => {
    console.log(err)
  }
)

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

var newUser = new User({
  email: 'huurray@gmail.com'
})

newUser.save().then(
  result => {
    console.log(result)
  },
  err => {
    console.log(err)
  }
)
