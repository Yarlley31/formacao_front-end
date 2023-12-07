// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    }
}

console.log(animal.nome)

animal.latir()


// 2 aprofundando em métodos
const pessoa = {
    nome: "Yarlley",

    getNome: function() {
        return this.nome
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("Marcos")

console.log(pessoa.getNome())

// 3 - prototype
const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

//  4 - mais sobre prototype
const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === Object.myObject)