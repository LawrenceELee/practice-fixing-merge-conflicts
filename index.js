//marissa's conflict 2
function getRandomNumber() {
  var randomNum = Math.floor(Math.random() * 100)
  document.getElementById("randomNum").innerHTML = randomNum
}

//List of names
let listOfNames = ["Tim", " Lawrence", " Monica", " Asaia"]

const list = document.getElementById("names")
console.log(list)

const entry = document.createElement("li")
console.log(entry)

entry.appendChild(document.createTextNode(listOfNames))
list.appendChild(entry)
//marissa's conflict
