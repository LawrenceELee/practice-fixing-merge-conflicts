// 1) git pull to get most recent code 2) change this comment to have your name 3) create pull request, but don't merge it yet. 4) get a merge conflict when other people do the same change on line 1.
function getRandomNumber() {
  var randomNum = Math.floor(Math.random() * 100)
  document.getElementById("randomNum").innerHTML = randomNum
}

//List of names
let listOfNames = ["Tim", "Lawrence", "Monica"]

const list = document.getElementById("names")
console.log(list)

const entry = document.createElement("li")
console.log(entry)

entry.appendChild(document.createTextNode(listOfNames))
list.appendChild(entry)
//marissa's conflict

