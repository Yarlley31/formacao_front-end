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

// 5 - template literals
const userName = "Yarlley"
const age = 17

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`)

// 6 - destructuring
const fruit = ["Maça", "Mamão", "Melão"]

const [f1, f2, f3] = fruit

console.log(f1, f3)

const productDetails = {
    name: "teclado",
    price: 60.00,
    category: "Periférico",
    color: "Black"
}

const {name: productName, price, category, color} = productDetails

console.log(`Você comprou o produto: ${productName}, ele custa R$${price} e é da cor ${color}.`)

// 7 - spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a3, 7, 8]

console.log(a4)

const carName = {name: "Gol"}
const carbrand = {brand: "VW"}
const otherInfos = {km: 1000, price: 89999}

const car = {...carName, ...carbrand, ...otherInfos}

console.log(car)

// 8 - classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa Xadrez", 30)

console.log(shirt)

console.log(shirt.productWithDiscount(15))

// 9 - herança
class ProductWithAttributes extends Product {
    constructor(name, price, color) {
        super(name, price)
        this.color = color
    } 
    showColors() {
        console.log("As cores são: ")
        this.showColors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 25.50, [
    "Preto",
    "Rosa",
    "Vermelho"
])

console.log(hat)

console.log(hat.name)