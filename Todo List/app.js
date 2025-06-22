let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

function buttnstyle(butn){
    butn.innerText="-";
    butn.style.backgroundColor = "#767676";
    butn.style.borderRadius="30px";
    butn.style.margin="5px";
    butn.style.padding="1px 9.5px";
    butn.style.fontSize = "20px";
    butn.style.color = "white";
    butn.style.cursor = "pointer";
    butn.style.transition = "background-color 0.3s";
    butn.addEventListener("mouseenter", function() {
    butn.style.backgroundColor = "red";
});
    butn.addEventListener("mouseleave", function() {
    butn.style.backgroundColor = "#767676";
});

}

function addElement(){
    let item = document.createElement("li");  
    item.innerText = inp.value;
    let butn = document.createElement("button");
    buttnstyle(butn); 
    
    butn.addEventListener("click",function(){
        let par = butn.parentElement;
        par.remove();
    });

    item.appendChild(butn);
    ul.appendChild(item);
   // console.log(inp.value);
    inp.value="";
}

btn.addEventListener("click",function(){
   if (inp.value!="")
   addElement();
});

inp.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        if (inp.value!="")
        addElement();
    }
});



