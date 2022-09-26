let id=document.getElementById("features")
console.log(document.getElementById("features"))

let selector=document.querySelector("h1")
console.log(document.querySelector("h1"))

console.log(document.querySelectorAll("p")[1])

document.querySelectorAll("p").forEach((el)=>console.log(el))

console.log(document.querySelector("a").getAttribute("href"))

document.querySelector("a").setAttribute("href","www.youtube.com")

const $mi=document.querySelector("#features");

$mi.style.setProperty("color","#ff0000");
$mi.style.setProperty("widht","500px");
$mi.style.setProperty("background","green")

const $mic=document.querySelector(".miclase")
let text= '<p> el dom es bla bla <p><p> se puede acceder y modificar <p>'
$mic.textContent=text
$mic.innerHTML=text

const img = document.createElement("img")
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3ub2FzJWoTsNFy0fLYWJ7ilkWI6Earjmsg&usqp=CAU"

document.body.appendChild(img)

const $caja=document.createElement("div")
$caja.innerHTML="<img src='img/nose.jpg' width '100px'>"

$mic.appendChild($caja)