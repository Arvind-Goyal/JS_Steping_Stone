let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","purple","green"];
let started = false;
let level =0;
let h2 = document.querySelector("h2");
let highScore = 0;
let h4 = document.querySelector("h4");
// don't get confuse by btn variable as it scope is upto function only so it wont overlap other btn vairable
document.addEventListener("keypress",function(){
    if(started===false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250-level*5);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250-level*3);
}

function levelUp(){
    userSeq =[]; // bcz each level user has to push all button again as it is memory game
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let ranBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx){
   // console.log("curr level :",level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000-level*15);
        }
        //console.log("Same Value");
    } else{
        h2.innerHTML = `Game Over!! <br> <b><i> Your Score was ${level-1}</i></b> <br> Press Any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },150);
        if(level>highScore){
            h4.innerHTML = `High Score <br> ${level-1}`;
            highScore = level-1;
        }
        reset();
    }
}

function btnPress(){
    if(started == true){
    let btn = this;
    //console.log(this); 
    userFlash(btn); 
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1); // whole game depends on the amount of time you take to press button 
                                // as we press one button then it is push in the userSeq array and then its lenght
                                // is Compare to check with gameSeq  
        // let game seq is 3 so when user click 1st time then it pushes in userSeq and it  goes to check with index 0 
        // to game seq then user click another button it push it into userSeq and check with index 1 as this 
        // time lenght is 2
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}