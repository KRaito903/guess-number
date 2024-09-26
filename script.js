const saveScore = {
  randomNumber: Math.floor(Math.random() * 100) + 1,
  win: false,
};

//function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const setMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

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
    setMessage("You loss !!!");
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".score").textContent = "💯 Score: 0";
    document.querySelector(".guess").style.backgroundColor = "red";
    await sleep(3000);
    again();
    return;
  } else {
    const highscore = Number(
      document.querySelector(".highscore").textContent.split(" ")[2]
    );
    if (guess === saveScore.randomNumber) {
      saveScore.win = true;
      document.querySelector("body").style.backgroundColor =
        "rgb(20, 199, 110)";
      setMessage("Congratulation !!!");
      document.querySelector(".boxGuess").textContent = guess;
      document.querySelector(".guess").style.backgroundColor =
        "rgb(20, 199, 110)";
      document.querySelector(".boxGuess").style.width = "8rem";
      if (score > highscore) {
        document.querySelector(".highscore").textContent =
          "🥇 Highscore: " + String(score);
      }
    } else {
      if (guess > saveScore.randomNumber) setMessage("Too high!!!");
      else setMessage("Too low!!!");
      eScore.textContent = "💯 Score: " + String(score - 1);
    }
  }
}

function again() {
  saveScore.randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".boxGuess").textContent = "?";
  setMessage("Start guessing...");
  document.querySelector(".score").textContent = "💯 Score: 30";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(31, 29, 29)";
  document.querySelector(".guess").style.backgroundColor = "rgb(31, 29, 29)";
  document.querySelector(".boxGuess").style.width = "7rem";
}

//listen event
document.querySelector(".again").addEventListener("click", again);
document.querySelector(".check").addEventListener("click", check);
