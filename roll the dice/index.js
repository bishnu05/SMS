function rollDice(){
    var d1=Math.floor(Math.random()*6)+1;
    var d2=Math.floor(Math.random()*6)+1;
    var d3=Math.floor(Math.random()*6)+1;

    var dice1=document.getElementById("member-1");
    dice1.innerHTML=d1;
    var dice2=document.getElementById("member-2");
    dice2.innerHTML=d2;
    var dice3=document.getElementById("member-3");
    dice3.innerHTML=d3;

    if(d1>d2 && d1>d3 && d2>d3){
        document.querySelector("#winner").innerHTML="Winner is Member-1";
        dice1.style.backgroundColor="green";
        dice2.style.backgroundColor="yellow";
        dice3.style.backgroundColor="red";
    }
    else if(d1>d2 && d1>d3 && d2<d3){
        document.querySelector("#winner").innerHTML="Winner is Member-1";
        dice1.style.backgroundColor="green";
        dice2.style.backgroundColor="red";
        dice3.style.backgroundColor="yellow";
    }
    else if(d2>d1 && d2>d3 && d1>d3){
        document.querySelector("#winner").innerHTML="Winner is Member-2";
        dice2.style.backgroundColor="green";
        dice1.style.backgroundColor="yellow";
        dice3.style.backgroundColor="red"
    }
    else if(d2>d1 && d2>d3 && d1<d3){
        document.querySelector("#winner").innerHTML="Winner is Member-2";
        dice2.style.backgroundColor="green";
        dice3.style.backgroundColor="yellow";
        dice1.style.backgroundColor="red";
    }
    else if(d3>d2 && d3>d1 && d1>d2){
        document.querySelector("#winner").innerHTML="Winner is Member-3";
        dice3.style.backgroundColor="green";
        dice1.style.backgroundColor="yellow";
        dice2.style.backgroundColor="red";
    }
    else if(d3>d2 && d3>d1 && d1<d2){
        document.querySelector("#winner").innerHTML="Winner is Member-3";
        dice3.style.backgroundColor="green";
        dice2.style.backgroundColor="yellow";
        dice1.style.backgroundColor="red";
    }
    else {
        document.querySelector("#winner").innerHTML="Please Roll the Dice Again";
        dice1.style.backgroundColor="blue";
        dice2.style.backgroundColor="blue";
        dice3.style.backgroundColor="blue";
    }

}