// 1 - var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

function logName() {
    const name = "Pedro"
    console.log(name)
}

const name = "Matheus"

logName()
console.log(name)

// 2 - arrow functions
const sum = function(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5))

console.log(arrowSum(5,5))

const greeting = (names) => {
    if(names) {
        return `Olá ${names}!`
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Yarlley'))
console.log(greeting())

const user = {
    name: 'Yarlley',
    sayUsername() {
        setTimeout(function() {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 1000)
    },
    sayUsernameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 2000);
    }
}

//user.sayUsername()
//user.sayUsernameArrow()

// 3 - filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "yarlley", available: true},
    {name: "Marcos", available: true},
    {name: "Gabi", available: false},
    {name: "Dani", available: true},
    {name: "Ravena", available: false},
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)

// 4 - map
const products = [
    {name: 'Camisa', price: 30, category: 'Roupas'},
    {name: 'Chaleira elétrica', price: 140, category: 'Elétrico'},
    {name: 'Fogão', price: 450, category: 'Elétrico'},
    {name: 'Calça Jeans', price: 50, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)