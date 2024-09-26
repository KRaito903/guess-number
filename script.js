const saveScore = {
  randomNumber: Math.floor(Math.random() * 100) + 1,
  win: false,
};

//function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function check() {
  if (saveScore.win) {
    again();
    saveScore.win = false;
    return;
  }
  const guess = Number(document.querySelector(".guess").value);
  const eScore = document.querySelector(".score");
  const score = Number(eScore.textContent.split(" ")[2]);
  if (score - 1 <= 0) {
    document.querySelector(".message").textContent = "You loss !!!";
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".score").textContent = "💯 Score: 0";
    await sleep(3000);
    again();
    return;
  } else {
    const highscore = Number(document.querySelector('.highscore').textContent.split(" ")[2]);
    if (guess === saveScore.randomNumber) {
      saveScore.win = true;
      document.querySelector("body").style.backgroundColor =
        "rgb(20, 199, 110)";
      document.querySelector(".message").textContent = "Congratulation !!!";
      document.querySelector(".boxGuess").textContent = guess;
      if (score > highscore) {
        document.querySelector(".highscore").textContent =
          "🥇 Highscore: " + String(score);
      }
    } else {
      if (guess > saveScore.randomNumber)
        document.querySelector(".message").textContent = "Too high!!!";
      else document.querySelector(".message").textContent = "Too low!!!";
      eScore.textContent = "💯 Score: " + String(score - 1);
    }
  }
}

function again() {
  saveScore.randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".boxGuess").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "💯 Score: 100";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(31, 29, 29)";
}

//listen event
document.querySelector(".again").addEventListener("click", again);
document.querySelector(".check").addEventListener("click", check);
