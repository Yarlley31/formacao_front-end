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

// 11 - push e pop
const array = ["a", "b", "c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop() // o pop retorna o elemento removido

console.log(itemRemovido)

console.log(array)

array.push("f", "d", "s")

console.log(array)

// 12 - shift e unshift

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift("p", "q", "r")

letters.unshift("z")

console.log(letters)

// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))

console.log(myElements.indexOf("Mamão"))

console.log(myElements.lastIndexOf("Mamão"))

// 14 - slice
const testeSlice =["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(1, 4)

console.log(testeSlice)
console.log(subArray)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2) // vai mostrar a partir do índex 2

console.log(subArray4)

// 15 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})