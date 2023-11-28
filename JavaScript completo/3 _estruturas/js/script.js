// 1 - Variáves
let nome = "Yarlley"

console.log(nome)

nome = "Yarlley Fernandes"

console.log(nome)

const idade = 16

console.log(idade)

// idade = 25

console.log(typeof nome)

console.log(typeof idade)

// 2 - Mais sobre variáveis
// let = 2teste = "inválido"
// let = @teste = "inválido"

let a = 10, b = 20, c = 30

console.log(a, b, c)

const nomecompleto = "Yarlley Fernandes"

const nomeCompleto = "Matheus Battisti"

console.log(nomecompleto)

console.log(nomeCompleto)

let _teste = "ok"

let $teste = "ok"

console.log(_teste, $teste)

// 3 - prompt
// const age = prompt("Digite a sua idade:")

// console.log(`Você tem ${age} anos.`)

// 4 - alert
// alert("Testando")

// const x = 14

// alert(`O número é ${x}`)

// 5 - Math (Objeto)
console.log(Math.max(5, 2, 1, 10))

console.log(Math.floor(3.14))

console.log(Math.ceil(4.85))

// 6 - console (Objeto)
console.log("Teste")

console.error("error")

console.warn("aviso")

// 7 - if
const m = 10

if(m > 5) {
    console.log(`M é maior que 5!`)
}

const user = "João"

if(user === "João") {
    console.log(`Olá ${user}!`)
}

if(user === "Maria") {
    console.log("olá Maria!")
}

// 8 - Else
const loggedIn = false

if(loggedIn) {
    console.log("Está autenticad!")
} else {
    console.log("Não autenticado!")
}

const q = 10
const w = 15

if(q > 5 && w > 20) {   
    console.log("Números mais altos")
} else {
    console.log("Os números não são mais altos")
}

// 9 - Else if
if(1 > 2) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora sim!")
}

const userName = "Yarlley"
const userAge = 16

if (userName === "José") {
    console.log("Bem-vindo José")
} else if (userName === "Yarlley" && userAge === 16) {
    console.log("Olá Yarlley, você tem 16 anos!")
} else {
    console.log("Nenhuma condição aceita!")
}

// 10 - While

let p = 0

while(p < 5) {
    console.log(`Repetindo ${p}`)
    p += 1
}

// loop infinito
x = 10

//while(x > 5) {
//    console.log(`Imprimindo ${x}`)
//    x++ // sem esse incremento se repetiria infinitamente/
//}

// 11 - Do while
let o = 10

do {
    console.log(`Valor de ${o}`)
    o--
} while (o > 1)

// 12 - For
for(let t = 0; t < 10; t++) {
    console.log("Repetindo algo...")
}

let r = 10 

for(r; r > 0; r--) {
    console.log(`O r está diminuindo: ${r}`)
}

console.log(r);

// 13 - Identaçao
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("deu 0!");
        }
    }
}

// 14 - Break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if(g === 15) {
        console.log("O g é 15!")
        break
    }
}

// 15 - Continue
for(let s = 1; s < 10; s++) {
    // operador de resto = %
    if(s % 2 === 0) {
        console.log("Número par!")
        continue
    }

    console.log(s)
}

// 16 - Switch
const job = "asd"

switch(job) {
    case "Programador":
        console.log("Você é um programador!")
        break
    case "Advogado":
        console.log("Você é um advogado!")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!")
        break
    default:
        console.log("Profissão não encontrada!")
        break
}

// switch "errado" (sem break)
const l = 100

switch(l) {
    case 200:
        console.log("L é 200!")
    case 100:
        console.log("L é 100!")
    case 10:
        console.log("L é 10!")
    default:
        console.log("L não foi encontrado!")
}