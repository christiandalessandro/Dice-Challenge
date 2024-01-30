var randomNumber1 = Math.floor (Math. random() * 6) + 1; //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dicel.png - dice6.png



document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor (Math. random() * 6) + 1; //1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dicel.png - dice6.png



document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 Win";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win";
    }

else {
    document.querySelector("h1").innerHTML = "Draw!";
}
