const https = require('https')

https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
    let str = '';
    res.on('data', (chunk) => {
        str += chunk
    })
    res.on('end', () => {
        console.log(str)
    })
})