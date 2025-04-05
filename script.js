let secretWord = "";
let playerName = "";
let guessCount = 0;

function startGame() {
  const nameInput = document.getElementById("playerName").value.trim();
  const wordInput = document.getElementById("secretWord").value.trim();

  if (nameInput === "" || wordInput.length !== 5) {
    alert("אנא הכנס שם ומילה בת 5 אותיות בדיוק.");
    return;
  }

  playerName = nameInput;
  secretWord = wordInput;

  document.getElementById("popup").style.display = "none";
  document.getElementById("game").style.display = "block";
}

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const guess = guessInput.value.trim();
  guessInput.value = "";

  if (guess.length !== 5) {
    alert("המילה חייבת להכיל בדיוק 5 אותיות.");
    return;
  }

  guessCount++;

  const row = document.createElement("div");
  row.style.margin = "10px";
  for (let i = 0; i < 5; i++) {
    const span = document.createElement("span");
    span.classList.add("letter-box");
    span.textContent = guess[i];

    if (guess[i] === secretWord[i]) {
      span.classList.add("correct");
    } else if (secretWord.includes(guess[i])) {
      span.classList.add("close");
    } else {
      span.classList.add("wrong");
    }

    row.appendChild(span);
  }

  document.getElementById("guesses").appendChild(row);

  if (guess === secretWord) {
    setTimeout(() => {
      alert(`כל הכבוד ${playerName}! ניחשת נכון אחרי ${guessCount} ניחושים 🎉`);
      updateScoreboard(playerName, guessCount);
    }, 100);
  }
}

function updateScoreboard(name, guesses) {
  const scoreboard = document.getElementById("scoreboard");
  const entry = document.createElement("p");
  entry.textContent = `🧑‍🎉 ${name} ניחש/ה את המילה אחרי ${guesses} ניחושים`;
  scoreboard.appendChild(entry);
}
