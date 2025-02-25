/** @format */

let boxes = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset-button");
let resultMessage = document.querySelector(".result-message");
let click = true;
let gameActive = true;

function checkWinner() {
  let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    console.log(pattern);
    if (
      boxes[a].innerHTML !== "" &&
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      gameActive = false;
      resultMessage.innerHTML = `${boxes[a].innerHTML} IS THE WINNER!`;
      resultMessage.style.background = "rgba(0, 0, 0, 0.6)";
      resultMessage.style.padding = "10px 20px";
      boxes[a].style.background = "#4CAF50";
      boxes[b].style.background = "#4CAF50";
      boxes[c].style.background = "#4CAF50";
      return true;
    }
  }
  return false;
}

function checkDraw() {
  if ([...boxes].every((box) => box.innerHTML !== "") && gameActive) {
    resultMessage.innerHTML = "IT'S A DRAW!";
    resultMessage.style.background = "rgba(0, 0, 0, 0.6)";
    resultMessage.style.padding = "10px 20px";
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!gameActive || box.innerHTML !== "") return;
    box.innerHTML = click ? "X" : "O";
    box.style.color = click ? "rgb(255, 87, 51)" : "rgb(52, 152, 219)";
    click = !click;
    if (!checkWinner()) {
      checkDraw();
    }
  });
});

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.background = "";
  });
  resultMessage.innerHTML = "";
  resultMessage.style.background = "transparent";
  gameActive = true;
  click = true;
});
