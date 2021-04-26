let winCounter = 0
let lossCounter = 0

const game = (location) => {
  let computerMove = Math.floor(Math.random() * 3)
  if(computerMove === 0) {
    computerMove = "Giant"
  } else if(computerMove === 1) {
    computerMove = "Wizard"
  } else {
    computerMove = "Elf"
  }

  document.getElementById('computer_move').innerHTML = `The queen chose ${ computerMove }`
  console.log("computer: ", computerMove);
  console.log("you: ", location);

  if(location === computerMove) {
    document.getElementById('outcome').innerHTML = "Tie!"
  } else if(location === "Giant" && computerMove === "Elf") {
    winCounter += 1
    document.getElementById('win_counter').innerHTML = winCounter
    checkWinner()
    document.getElementById('outcome').innerHTML = "You win with giant!"
  } else if(location === "Wizard" && computerMove === "Giant") {
    winCounter += 1
    document.getElementById('win_counter').innerHTML = winCounter
    checkWinner()
    document.getElementById('outcome').innerHTML = "You win with wizard!"
  } else if(location === "Elf" && computerMove === "Wizard") {
    winCounter += 1
    document.getElementById('win_counter').innerHTML = winCounter
    checkWinner()
    document.getElementById('outcome').innerHTML = "You win with elf!"
  } else {
    lossCounter += 1
    document.getElementById('loss_counter').innerHTML = lossCounter
    checkWinner()
    document.getElementById('outcome').innerHTML = `The queen won with ${computerMove}... womp womp`
  }
}

const checkWinner = () => {
  if(winCounter === 5) {
    document.getElementById('content').innerHTML = ""
    document.getElementById('game_over').innerHTML = "you win!"
  } else if(lossCounter === 5) {
    document.getElementById('content').innerHTML = ""
    document.getElementById('game_over').innerHTML = "you lose!"
  }
}













//
