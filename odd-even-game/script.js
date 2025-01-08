document.getElementById("play-button").addEventListener("click", () => {
  const playerChoice = document.getElementById("player-choice").value;
  const playerNumber = parseInt(document.getElementById("player-number").value);

  if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 5) {
    document.getElementById("result").textContent =
      "Please choose a valid number between 1 and 5.";
    return;
  }

  // Generate computer's number and choice
  const computerNumber = Math.floor(Math.random() * 5) + 1;
  const computerChoice = playerChoice === "odd" ? "even" : "odd";

  // Calculate the sum and determine if it's odd or even
  const sum = playerNumber + computerNumber;
  const result = sum % 2 === 0 ? "even" : "odd";

  // Determine the winner
  const winner = result === playerChoice ? "Player wins!" : "Computer wins!";

  // Display the results
  document.getElementById("result").innerHTML = `
      <p>Player chose ${playerNumber} (${playerChoice})</p>
      <p>Computer chose ${computerNumber} (${computerChoice})</p>
      <p>The sum of the numbers is ${sum}, which is ${result}</p>
      <h3>${winner}</h3>
    `;
});
