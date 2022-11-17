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
    const insertObj = {
        name: '刘婷婷111',
        age: 32,
        sex: false,
        height: 159,
        department: '人事部',
        salary: 100
    }
    db.collection('account').insertOne(insertObj, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        client.close()
    })
})