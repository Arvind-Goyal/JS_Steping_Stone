let btn = document.querySelector("button");
btn.addEventListener("mousemove",function(){
    let color =getRandomColor();
    console.log(color);
    let h3 = document.querySelector("h3");
    h3.innerText = color;
    let div = document.querySelector("div");
    div.style.backgroundColor = color;
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
    
}