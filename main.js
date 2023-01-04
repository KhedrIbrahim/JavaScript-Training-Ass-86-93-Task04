let myFirDiv = document.querySelector(".one");
let mySecDiv = document.querySelector(".two");
let myFirTit = myFirDiv.title
let mySecTit = mySecDiv.title

myFirDiv.setAttribute("title", mySecTit)
mySecDiv.setAttribute("title", myFirTit)

myFirDiv.innerHTML = `${mySecTit}`
mySecDiv.innerHTML = `${myFirTit} ${document.getElementsByTagName("div").length}`
