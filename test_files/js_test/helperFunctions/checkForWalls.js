const checkForWalls = function(boardSize, wallsHash, movement) {
  if (movement[0] >= boardSize[0]){
    // checking for a border wall 
        return false;
  }
  if(movement[1]>=boardSize[1]){
    //checking for a border wall
    return false
  }
  //if the propose(future) move will not hit the outside of the box, check if it will hit an interior wall
  const proposedMove = movement.join(" ");
  if (wallsHash[proposedMove] === true) {
    return false;
  } else {
    //if all 3 checks are false, then the proposed move is valid
    return true;
  }
};

module.exports = checkForWalls;
