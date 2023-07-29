"use strict";

// document.querySelector('.message').textContent = 'correct Number Yeah.....🎉🎊';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = '';

let highscore = 0;
let LifeLine = 5;
let score = 0;
let secretNumber = Math.floor(Math.random() * 10 + 1);
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const userGuess = Number(document.querySelector(".guess").value);
  console.log(userGuess);

  if (!userGuess) {
    document.querySelector(".message").textContent = "Enter Number please 😢";
  } else if (secretNumber === userGuess) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent =
      "correct Guess yeah...🎉🎊😊";
    document.querySelector("body").style.backgroundImage = "URL(success.gif)";
    document.querySelector("body").style.backgroundSize = "600px";
    document.querySelector("body").style.backgroundPosition = "left center";

    setTimeout(myFunction, 2000);

    score++;
    document.querySelector(".score").textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (userGuess !== secretNumber) {
    if (LifeLine > 1) {
      document.querySelector(".message").textContent =
        userGuess < secretNumber ? "Too Low 😒..." : "Too high 🫤....";
      LifeLine--;
      document.querySelector(".lifeLine").textContent = LifeLine;
    } else {
      document.querySelector(".lifeLine").textContent = 0;
      document.querySelector(".message").textContent =
        "💥💣Sorry you lose click again to play the game";
    }
  }
});

function myFunction() {
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
  secretNumber = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".message").textContent = "Guess again...😉";
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".score").textContent = "0";
  // document.querySelector(".lifeLine").textContent = LifeLine;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundImage =
    "url(src/mushroom.png)";
  document.querySelector("body").style.backgroundSize = "600px";
  document.querySelector("body").style.backgroundPosition = "center";
  document.querySelector("body").style.backgroundRepeat = "no-repeat;";
}

document.querySelector(".again").addEventListener("click", function () {
  LifeLine = 5;
  score = 0;

  secretNumber = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".lifeLine").textContent = LifeLine;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundImage =
    "url(src/mushroom.png)";
  document.querySelector("body").style.backgroundSize = "600px";
  document.querySelector("body").style.backgroundPosition = "center";
  document.querySelector("body").style.backgroundRepeat = "no-repeat;";
});
