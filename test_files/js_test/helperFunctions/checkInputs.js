function checkInputs(boardSize, initialPosition, movements ){
  //checking for various edge cases

  //is board size a positive number?
  if(boardSize[0] < 0 || boardSize[1] < 0){
    console.log(boardSize)
    console.log("board size contains a negative number")
    return false
  }

  if(typeof(boardSize[0]) !== 'number'  || typeof(boardSize[1]) !== "number"){
    console.log(boardSize)
    console.log("board size contains a non number")
    return false
  }

  // is board size an integer?
  if(Number.isInteger(boardSize[0]) !== true || Number.isInteger(boardSize[1] !== true)){
    console.log(initialPosition)
    console.log("initial position contains a non number")
    return false
  }
//there must be only 2 numbers in the board size
if(boardSize.length !== 2){
  console.log(boardSize)
  console.log("board size does not have 2 values")
  return false
}

if(initialPosition.length !==2){
  console.log(initialPosition)
  console.log("initial position does not have 2 values")
}

  // is initial position a positive number?
  if(initialPosition[0] < 0 || initialPosition[1]< 0){
    console.log("intial position contains a negative number")
    return false
  }
  if(typeof(initialPosition[0]) !== 'number'  || typeof(initialPosition[1]) !=="number"){
    console.log(initialPosition)
    console.log("initial positiond is invalid")
    return false
  }
  //is initial position an integer?
  if(Number.isInteger(initialPosition[0]) !== true || Number.isInteger(initialPosition[1]) !== true){
    console.log(initialPosition)
    console.log("initial positiond is invalid")
    return false
  }

  //is intitial positive inside of the board?
  if(initialPosition[0]>boardSize[0] || initialPosition[1]> boardSize[1]){
    console.log('initial position is outside of the board')
    return false 
  }
  // are the movement directions all either N, S, E or W?
  for(let i=0;i<movements.length;i++){
    let currentDirection = movements[i] 
    let directions = "NSEW"
    if(directions.includes(currentDirection)){
      return true
    } else{
        console.log('movement directions are not all N, S, E or W')
      return false
    }


  }
  //if all tests "fail", the inputs are valid
  return true
}

module.exports = checkInputs