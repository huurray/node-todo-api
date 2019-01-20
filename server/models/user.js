const mongoose = require('mongoose')

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

module.exports = {
  User
}

// var newTodo = new Todo({
//   text: '  Edit this video  ',
//   completed: true,
//   completedAt: 123
// })

// newTodo.save().then(
//   result => {
//     console.log(result)
//   },
//   err => {
//     console.log(err)
//   }
// )

// var newUser = new User({
//   email: 'huurray@gmail.com'
// })

// newUser.save().then(
//   result => {
//     console.log(result)
//   },
//   err => {
//     console.log(err)
//   }
// )
