document.getElementById('myButton').addEventListener("click",function(){
    let p = document.createElement("p")
    p.textContent = "Bonjour, vous avez cliqué sur le bouton !"
    document.body.append(p)
})