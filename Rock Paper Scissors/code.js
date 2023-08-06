let userScore = 0;
let computerScore = 0;
const winScore = 5;

function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function playRound(userMove, computerMove) {
  if (userMove === computerMove) {
    return "It's a tie!";
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
  ) {
    userScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

function updateScores() {
  document.getElementById("userScore").textContent = `User: ${userScore}`;
  document.getElementById("computerScore").textContent = `Computer: ${computerScore}`;

  if (userScore === winScore) {
    alert("Congratulations! You win the game!");
    resetGame();
  } else if (computerScore === winScore) {
    alert("Computer wins the game. Better luck next time!");
    resetGame();
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScores();
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
  const computerMove = computerPlay();
  const result = playRound("rock", computerMove);
  alert(result);
  updateScores();
});

paperButton.addEventListener("click", function() {
  const computerMove = computerPlay();
  const result = playRound("paper", computerMove);
  alert(result);
  updateScores();
});

scissorsButton.addEventListener("click", function() {
  const computerMove = computerPlay();
  const result = playRound("scissors", computerMove);
  alert(result);
  updateScores();
});
