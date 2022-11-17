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
    // db.collection('account').find({}).toArray((err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data)
    //     client.close()
    // })

    // 条件查询
    // db.collection('account').find({}).limit(3).skip(3).toArray((err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data)
    //     client.close()
    // })

    // db.collection('account')
    // .find({ age: { $gt: 29, $lt: 38 } })
    // .sort({ age: -1 })
    // .toArray((err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data)
    //     client.close()
    // })

    // 聚合查询
    // db.collection('account')
    // .aggregate([
    //     { $match: { age: { $gt: 16, $lt: 50 } } },
    //     { $group: { _id: null, num_tutorial: { $sum: '$age' } } },
    //     { $project: { _id: 0, num_tutorial: 1 } }
    // ])
    // .toArray((err, data) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     console.log(data)
    //     client.close()
    // })

    db.collection('account')
        .aggregate([
            { $match: { age: { $gt: 18, $lt: 50 } } },
            { $group: { _id: '$department', num_tutorial: { $min: '$age' } } },
            { $project: { _id: 1, num_tutorial: 1 } }
        ])
        .toArray((err, data) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(data)
            client.close()
        })
})