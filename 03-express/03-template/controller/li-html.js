const lis = (req, res) => {
    const dataArray = []
    for (let index = 1; index <= 10; index++) {
        dataArray.push(`line ${index}`)
    }
    res.render('list-html', {
        dataArray
    })
}

exports.lis = lis