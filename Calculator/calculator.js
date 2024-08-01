const moves = prompt('Pick Your Move')

const computer = (Math.random())

const computerMoves = {
  rock : `${computer >= 0 && computer< 1/3}`,
  paper : `${computer >= 1/3 && computer < 2/3}`,
  scissors : `${computer >= 2/3 && computer < 1}`
}

const humanMoves =  {
  rock : `${moves === 'rock'}`,
  paper : `${moves === 'paper'}`,
  scissors :`${moves === 'scissors'}`,
}

function result () {
  if(humanMoves.paper && computerMoves.paper ||  humanMoves.rock && computerMoves.rock ||   humanMoves.paper && computerMoves.paper){
    return 'You Tie'
  
  } else if (humanMoves.rock &&  computerMoves.paper){
    return 'You lose, Computer Chose Paper'
  
  } else if (humanMoves.paper && computerMoves.scissors){
    return 'You lose, Computer Chose Scissors'
  
  } else if (humanMoves.scissors && computerMoves.rock){
    return 'You lose, Computer Chose Rock'
  
  } else if (humanMoves.rock && computerMoves.scissors){
    return 'You win, Computer Chose scissors'
  
  }else if (humanMoves.paper && computerMoves.rock){
    return 'You win, Computer Chose rock'
  
  }else if (humanMoves.scissors && computerMoves.paper){
    return 'You win, Computer Chose paper'
  }
}

console.log(result());



