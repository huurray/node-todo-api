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

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5c3df11e7d12ee34bc34bfea') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos')
    //       console.log(JSON.stringify(docs, undefined, 2))
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err)
    //     }
    //   )

    // db.collection('Todos')
    //   .countDocuments()
    //   .then(
    //     count => {
    //       console.log('Todos count', count)
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err)
    //     }
    //   )

    db.collection('Todos')
      .find({ name: 'mike' })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2))
        },
        err => {
          console.log('Unable to fetch todos', err)
        }
      )

    // client.close()
  }
)
