var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Ramdom Number-Player-1

var randomImage = "dice" + randomNumber1 + ".png"; //dice-img-1 to dice-img-6

var randomImageSrc = "images/" + randomImage; //diceImage1 to diceImage6

document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc); // Player-1 Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Ramdom Number-Player-2

var randomImage2 = "dice" + randomNumber2 + ".png"; //dice-img-1 to dice-img-6

var randomImageSrc2 = "images/" + randomImage2; //diceImage1 to diceImage6

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2); // Player-1 Dice

// Plater 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
// player 2 wins
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
// draw
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
