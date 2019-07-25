const createWallObject = function(dataArray){
  outputObject = {}
  for(let i=3;i<dataArray.length;i++){
      outputObject[dataArray[i]] = true
  }
  return outputObject
}

module.exports = createWallObject