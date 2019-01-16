// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    //db work
    const db = client.db('TodoApp')

    //update
    db.collection('Todos')
      .findOneAndUpdate(
        { _id: new ObjectID('5c3df21b78c8953508503045') },
        {
          $set: {
            text: 'write code'
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result)
      })

    db.collection('Users')
      .findOneAndUpdate(
        { _id: new ObjectID('5c3e9170ae0d673dc6105561') },
        {
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result)
      })

    // client.close()
  }
)
