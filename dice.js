

var dice = Math.floor(Math.random()*6) + 1;
var dicee = Math.floor(Math.random()*6) + 1;
var diceImage1Source = "images/dice"+ dice + ".png";
var diceImage2Source = "images/dice"+ dicee + ".png";



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage1Source);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2Source);



if (dicee > dice){
    document.querySelector("h1").innerHTML = "Players 2nd Wins";
}

else if (dice > dicee) {
    document.querySelector("h1").innerHTML = "Player 1st Wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw";
}