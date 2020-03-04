const button = document.querySelector("button")
const body = document.querySelector("body")



const colors = ["red","green","blue","yellow","orange","brown","pink"]
//                0       1      2       3       4        5       6
// colors[2]

body.style.backgroundColor = "violet"

button.addEventListener ("click", changeBackround)

function changeBackround () {
    const colorIndex = Math.floor(Math.random()* colors.length)
body.style.backgroundColor = colors[colorIndex]
}