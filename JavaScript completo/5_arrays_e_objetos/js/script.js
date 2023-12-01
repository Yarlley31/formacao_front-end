// 1 - Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Yarlley", true, 2, 3.14, ["Yes", "No"]]

console.log(itens)

// 2 - Mais sobre arrays
const arr = ["a","b","c","d","e"]

console.log(arr[2])

console.log(arr[86]) // retorna undefined

// 3 - Propiedades
const numbers = [4, 7, 2]

console.log(numbers.length)

console.log(numbers["length"])

const myName = "Yarlley"

console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "Algum texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf("g")) // Encontrar a posição de um caractere

// 5 - Objetos (Object Literals)
const person = {
    name: "Yarlley",
    age: 16,
    job: "Nenhum"
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)

// 6 - Criando e deletanto propiedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)
// Objetos são utilizados para descrever um item

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj) // propiedade 1 é o qual recebe do segundo 

console.log(obj2)

// 8 - Conhecendo melhor os objetos
    // .keys vai mostrar as chaves do objeto tipo: "a", "b", "c", "engine", "brand"
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

    // .entries mostra um monte de dado no console, mostrou as chaves, os nomes, o lenght
console.log(Object.entries(car))

// 9 - Mutação (Mutability)
const a = {
    name: "Yarlley"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 16

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - loop em arrays
const users = ["Yarlley", "Matheus", "João", "Laura"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usúario: ${users[i]}`)
}