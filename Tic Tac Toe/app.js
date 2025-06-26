let btns = document.querySelectorAll(".btn");
let turn =true;
let h3 = document.querySelector("h3");
let reset = document.querySelector(".reset");
let scoreX =0;
let scoreY =0;
let scrX = document.querySelector(".scoreX");
let scrY = document.querySelector(".scoreY");

const winnerPatern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       // console.log("Hello");
        if (btn.classList.contains("clicked")) return;
        if(turn){
        btn.innerText = "O";
        turn = false;
        }
        else{
        btn.innerText = "X";
        turn = true;
        }
        
        btn.classList.add("clicked");

        checkWiner();
        checkDraw();
    })
})

function checkDraw(){
    for(let btn of btns){
        if(btn.innerText=="")
            return;
    }
    h3.innerText="DRAW";
}

function disable(){
    for(let btn of btns){
        btn.classList.add("clicked");
    }
}
function checkWiner(){
    for(let pattern of winnerPatern){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
        if(pos1!="" &&pos2!="" &&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            h3.innerText = `Winner ${pos1}`;
             disable();
             if(pos1 =="X"){
                scoreX++;
                scrX.innerHTML=`Score X:<br>${scoreX}`;
             }
             else{
                scoreY++;
                scrY.innerHTML=`Score Y:<br>${scoreY}`;
             }
            }
           
        }
    }
}


reset.addEventListener("click",()=>{
    for(let btn of btns){
        console.log(btn.classList);
        btn.classList.remove("clicked");
        console.log(btn.classList);
        btn.innerText="";
        
    }
    h3.innerText="";
})