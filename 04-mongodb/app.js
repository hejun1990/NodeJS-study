const MongoClient = require('mongodb').MongoClient
// nodejs的mongodb只能连接“127.0.0.1:27017”，不能连接“localhost:27017”，十分坑爹
const url = 'mongodb://127.0.0.1:27017/'
const dbName = 'mall'

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
client.connect(err => {
    if (err) {
        console.log(err)
        return
    }
    const db = client.db(dbName)
    db.collection('account').find({}).toArray((err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data)
        client.close()
    })
})