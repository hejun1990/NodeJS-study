const list = (req, res) => {
    const dataArray = []
    for (let index = 0; index < 10; index++) {
        dataArray.push(`line ${index}`)
    }
    res.set('Content-Type', 'application/json;charset=utf-8')
    res.render('list', {
        dataArray: JSON.stringify(dataArray)
    })
}

exports.list = list