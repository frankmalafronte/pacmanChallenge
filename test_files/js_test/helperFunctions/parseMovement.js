
const parseMovement = function(XPos,YPos,movement){
  newXPos = XPos
  newYPos = YPos
  if(movement ==="N"){
      //move up
      newYPos++
  }
  if(movement === "S"){
      //move down
      newYPos--
  }
  if(movement ==="E"){
      //move right
      newXPos++
  }
  if(movement ==="W"){
      //move left
      newXPos--
  }
  return [newXPos,newYPos]
}

module.exports = parseMovement