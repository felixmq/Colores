const createrColor = document.getElementById('createrColor');


let nuevoColor = []
const div = document.getElementById('div');

function getColor(){
    let color = "#";
    let letter = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];

    for(let i = 0 ;i < 6; i++){
        color = color + letter[Math.floor(Math.random() * letter.length)];
        
    } document.body.style.background = color
    createrColor.innerHTML = color
    
}   
   



console.log(getColor())
