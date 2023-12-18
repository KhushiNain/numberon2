// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let number1=Math.round(Math.random()*100)
let number2=Math.round(Math.random()*100)
// console.log(number1,number2);
let number1Box=document.getElementById("number1");
let number2Box=document.getElementById("number2");
number1Box.innerText=number1;
number2Box.innerText=number2;


// Iteration 3: Creating variables required to make the game functional

let plusBtn=document.getElementById("plus");
let minusBtn=document.getElementById("minus");
let mulBtn=document.getElementById("mul");
let divideBtn=document.getElementById("divide");;
let modulusBtn=document.getElementById("modulus");
let score=0;


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3;
let number3Box=document.getElementById("number3");
// console.log(number3)


// Iteration 5: Creating a randomise function to make the game functional

function randomise(){

    number1=Math.round(Math.random()*100)
    number2=Math.round(Math.random()*100)
    if(number1<number2){
        let temp=number1;
        number1=number2;
        number2=temp;
    }

    number1Box.innerText=number1;
    number2Box.innerText=number2;

    let OperatorArr=["+","-","*","/","%"];

    let randomIndex=Math.floor(Math.random()*OperatorArr.length);

    // if(OperatorArr[randomIndex]=="+"){
    //     number3=number1+number2;
    // }

    switch(OperatorArr[randomIndex]){

        case "+":
            number3=number1+number2;
            break;
        case "-":
            number3=number1-number2;
            break;
        case "*":
            number3=number1*number2;
            break;
        case "/":
            number3=Math.floor(number1/number2);
            break;
        case "%":
            number3=number1%number2;
            break;
        default:
            randomise();
            
    }

    number3Box.innerText=number3;

}

randomise();


// Iteration 6: Making the Operators (button) functional

plusBtn.onclick=()=>{
    if (number1+number2==number3){
        score++;
        console.log(score)
        randomise();
        resetTimer(timerID);
    }else{
        window.location.href='./gameover.html'
    }
}

minusBtn.onclick=()=>{
    if (number1-number2==number3){
        score++;
        randomise();
        resetTimer(timerID);
    }else{
        window.location.href='./gameover.html'
    }
}

mulBtn.onclick=()=>{
    if (number1*number2==number3){
        score++;
        randomise();
        resetTimer(timerID);
    }else{
        window.location.href='./gameover.html'
    }
}

divideBtn.onclick=()=>{
    if (Math.floor(number1/number2)==number3){
        score++;
        randomise();
        resetTimer(timerID);
    }else{
        window.location.href='./gameover.html'
    }
}

modulusBtn.onclick=()=>{
    if (number1%number2==number3){
        score++;
        randomise();
        resetTimer(timerID);
    }else{
        window.location.href='./gameover.html'
    }
}

// Iteration 7: Making Timer functional

// Iteration 7: Making Timer functional
let timer=document.getElementById("timer")
let count=20;
let timerID;
function starttimer(){
    count=20;
    timer.innerHTML=count;

    timerID=setInterval(() => {
        count--;
        timer.innerHTML=count;
        // console.log(count)
        if (count==0){
            window.location.href='./gameover.html'
        }
        localStorage.setItem("gameScore",score);
        console.log(score)

    }, 1000);

}

starttimer()
function resetTimer(timerID){
    clearInterval(timerID);
    starttimer();
}

// score storage 

