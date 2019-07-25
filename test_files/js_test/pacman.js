/**
 * Write a file docstring here
 * In order to solve this problem, first a function readFile reads the input file and converts it to a string, then spits the string on new line to create an array for easy access.
 * The return value of readFile is the argument for the pacman function.
 * The pacman function then takes each index of the input array and converts each into a more manageable data type
 * Then variables are declared which will be part of pacman's output, such as pacman's position on the X and Y coordinates
 * 2 objects are also created to perform memoization in order to cut down on run time
 * After making sure that the inputs are valid, function pacman will loop through input array[2], which is the string of movement directions
 * Before updating pacman's position, the character is parsed by a helper function to determine what pacman's next position might be, if it is valid(there are no walls at the new location)
*  If the move is valid, pacman's coordinates are updated. Also, a coin will be incremented and the new location added to the movements hash if pacman has not visited that location before
 * After pacman has iterated through all the directions, we can return the final position and coins. 

 
 * Author: Frank Malafronte
 */

const genericFile = "./generic.txt";
const edgeFile = ".edge.txt";
const runTimeFile = "./runtime.txt";
const fs = require("fs");
const path = require("path");
const {
  checkForWalls,
  createWallObject,
  parseMovement,
  checkInputs
} = require("./helperFunctions");

const readFile = function(file) {
  const contents = fs
    .readFileSync(path.resolve(__dirname, file))
    .toString()
    .split("\n");
  return contents;
};




function pacman(inputFile) {
  const data = readFile(inputFile);
  const boardSize = data[0].split(" ").map(Number);
  const intitialPosition = data[1].split(" ").map(Number);
  let XPos = intitialPosition[0];
  let YPos = intitialPosition[1];
  const wallsHash = createWallObject(data);
  const movements = data[2];
  const movementsHash = {};
  movementsHash[data[1].split(" ").map(Number)] = true;
  let coins = 0;

  if (!checkInputs(boardSize, intitialPosition, movements)) {
    console.log("inputs are invalid");
    return [-1, -1, 0];
  }

  for (let i = 0; i < movements.length; i++) {
    let potentialMove = movements[i];
    let proposedMove = parseMovement(XPos, YPos, potentialMove);
    if (checkForWalls(boardSize, wallsHash, proposedMove)) {
      XPos = proposedMove[0];
      YPos = proposedMove[1];
      if (movementsHash[proposedMove] !== true) {
        movementsHash[proposedMove] = true;
        coins++;
      } 
    }
  }

  let finalXPos = XPos;
  let finalYPos = YPos;
  let coinsCollected = coins;
  console.log(finalXPos, finalYPos, coinsCollected);
  return [finalXPos, finalYPos, coinsCollected];
}


module.exports.pacman = pacman;
