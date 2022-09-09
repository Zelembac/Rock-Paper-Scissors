const choices = document.getElementsByClassName("choice");
let playerChoice = "";
let compChoice = "";

let playerScore = 0;
let compScore = 0;

function scoreG() {
  document.getElementById("score").textContent = `${playerScore}-${compScore}`;
  document.getElementById("chosenP").textContent = playerChoice;
  document.getElementById("chosenC").textContent = compChoice;
}

document.getElementById("reset").addEventListener("click", function () {
  playerChoice = "";
  compChoice = "";

  playerScore = 0;
  compScore = 0;
  scoreG();
});

scoreG();
for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function () {
    console.log("pc" + this.textContent);
    playerChoice = this.textContent;
    compPlay();
    match();
    scoreG();
  });
}

function compPlay() {
  let rand = parseInt(Math.random() * 3 + 1);
  console.log(rand);
  if (rand == 1) {
    compChoice = "Rock";
  } else if (rand == 2) {
    compChoice = "Paper";
  } else if (rand == 3) {
    compChoice = "Scissors";
  }
  console.log("cc" + compChoice);
}
function match() {
  if (playerChoice == "Rock" && compChoice == "Rock") {
  } else if (playerChoice == "Rock" && compChoice == "Paper") {
    compScore++;
  } else if (playerChoice == "Rock" && compChoice == "Scissors") {
    playerScore++;
  } else if (playerChoice == "Paper" && compChoice == "Rock") {
    playerScore++;
  } else if (playerChoice == "Paper" && compChoice == "Paper") {
  } else if (playerChoice == "Paper" && compChoice == "Scissors") {
    compScore++;
  } else if (playerChoice == "Scissors" && compChoice == "Rock") {
    compScore++;
  } else if (playerChoice == "Scissors" && compChoice == "Paper") {
    playerScore++;
  } else if (playerChoice == "Scissors" && compChoice == "Scissors") {
  }
}
