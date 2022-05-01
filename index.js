const $boardItem0 = document.querySelector(".board-item-0");
const $boardItem1 = document.querySelector(".board-item-1");
const $boardItem2 = document.querySelector(".board-item-2");
const $boardItem3 = document.querySelector(".board-item-3");
const $boardItem4 = document.querySelector(".board-item-4");
const $boardItem5 = document.querySelector(".board-item-5");
const $boardItem6 = document.querySelector(".board-item-6");
const $boardItem7 = document.querySelector(".board-item-7");
const $boardItem8 = document.querySelector(".board-item-8");

let currentMove = "x";

function toggleMove() {
  if (currentMove == "x") {
    currentMove = "o";
  } else {
    currentMove = "x";
  }
}

function verifyGame() {
  if (
    $boardItem0.innerHTML != "" &&
    $boardItem0.innerHTML == $boardItem1.innerHTML &&
    $boardItem1.innerHTML == $boardItem2.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem3.innerHTML != "" &&
    $boardItem3.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem5.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem6.innerHTML != "" &&
    $boardItem6.innerHTML == $boardItem7.innerHTML &&
    $boardItem7.innerHTML == $boardItem8.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem0.innerHTML != "" &&
    $boardItem0.innerHTML == $boardItem3.innerHTML &&
    $boardItem3.innerHTML == $boardItem6.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem1.innerHTML != "" &&
    $boardItem1.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem7.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem2.innerHTML != "" &&
    $boardItem2.innerHTML == $boardItem5.innerHTML &&
    $boardItem5.innerHTML == $boardItem8.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem0.innerHTML != "" &&
    $boardItem0.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem8.innerHTML
  ) {
    return currentMove;
  }
}

function verifyGame() {
  if (
    $boardItem2.innerHTML != "" &&
    $boardItem2.innerHTML == $boardItem4.innerHTML &&
    $boardItem4.innerHTML == $boardItem6.innerHTML
  ) {
    return currentMove;
  }
}

$boardItem0.addEventListener("click", function () {
  if ($boardItem0.innerHTML != "") {
    return;
  }
  $boardItem0.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }

  toggleMove();
});

$boardItem1.addEventListener("click", function () {
  if ($boardItem1.innerHTML != "") {
    return;
  }
  $boardItem1.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem2.addEventListener("click", function () {
  if ($boardItem2.innerHTML != "") {
    return;
  }
  $boardItem2.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem3.addEventListener("click", function () {
  if ($boardItem3.innerHTML != "") {
    return;
  }
  $boardItem3.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem4.addEventListener("click", function () {
  if ($boardItem4.innerHTML != "") {
    return;
  }
  $boardItem4.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem5.addEventListener("click", function () {
  if ($boardItem5.innerHTML != "") {
    return;
  }
  $boardItem5.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem6.addEventListener("click", function () {
  if ($boardItem6.innerHTML != "") {
    return;
  }
  $boardItem6.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem7.addEventListener("click", function () {
  if ($boardItem7.innerHTML != "") {
    return;
  }
  $boardItem7.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});

$boardItem8.addEventListener("click", function () {
  if ($boardItem8.innerHTML != "") {
    return;
  }
  $boardItem8.innerHTML = currentMove;
  const gameResult = verifyGame();

  if (gameResult == "x" || gameResult == "o") {
    alert(currentMove);
  }
  toggleMove();
});
