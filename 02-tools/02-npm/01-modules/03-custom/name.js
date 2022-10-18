const name = {
    surname: 'zhang',
    height: 18,
    sayName() {
        console.log(this.surname)
    },
    setHeight(a) {
        this.height = a
    }
}

const age = {
    age: 100
}

module.exports = { name, age }