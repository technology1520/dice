var randomNumbeer1= Math.floor(Math.random()*6)+1; //Random number between 1 to 6
var randomDiceImage="dice"+randomNumbeer1+".png";//dice1.png-dice6.png
var randomImageSource="images/"+randomDiceImage;//images/dice1.png-images/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumbeer2= Math.floor(Math.random()*6)+1; //Random number between 1 to 6
var randomDiceImage2="dice"+randomNumbeer2+".png";//dice1.png-dice6.png
var randomImageSource2="images/"+randomDiceImage2;//images/dice1.png-images/dice6.png

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumbeer1>randomNumbeer2){
  document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNumbeer1==randomNumbeer2){
  document.querySelector("h1").innerHTML="Draw!!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
