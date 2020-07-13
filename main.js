function createStars(){
    let onepiece = document.querySelector(".onepiece");
    for(let i = 0; i < 30; i++){
        let star= document.createElement("i");
        star.classList.add("fa","fa-star-o");
        let distance = Math.floor(Math.random()* window.innerWidth)
        let size = Math.floor(Math.random()* 10)
        let duration = Math.random()
        star.style.fontSize = 15 + size + 'px';
        star.style.left= distance + 'px';
        star.style.animationDuration = 1 + duration +   's'
        star.style.color = getRandomColor()
        onepiece.appendChild(star);
    }
}
createStars();
function getRandomHex(){
    return Math.floor(Math.random()*255)
}
function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb("+ red+ "," + blue + "," +  green +")";
}