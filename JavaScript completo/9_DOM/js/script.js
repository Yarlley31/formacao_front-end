// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionando elementos por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// 3 - selecionando elementos por id
const title = document.getElementById("title")

console.log(title)

// 4 - selecionando elementos por class
const products = document.getElementsByClassName("products")

console.log(products)

// 5 - selecionando elementos por CSS
const productsQuery = document.querySelectorAll(".products")

console.log(productsQuery)

const maincontainer = document.querySelector("#main-container")

console.log(maincontainer)

// 6 - isertBefore
const p = document.createElement("p")

console.log(p)

const header = title.parentElement

header.insertBefore(p, title)

// 7 - appendChild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild

const h2 = document.createElement("h2")

h2.textContent = "Novo título galerinha"

header.replaceChild(h2, title)

// 9 - createTextNode
const myText = document.createTextNode("Vamos adicionar mais um título")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

maincontainer.appendChild(h3)

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

// 11 - altura e largura
const footer =  document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// 12 - posição do elemento
const products1 = products[0]

console.log(products1.getBoundingClientRect())

// 13 - estilos com JS
maincontainer.style.color = "red"
maincontainer.style.backgroundColor = "lightblue"
maincontainer.style.paddingBottom = "20px"

// 14 - alterando estilos de vários elementos
for(const li of listItens) {
    li.style.backgroundColor = "yellow"
}
