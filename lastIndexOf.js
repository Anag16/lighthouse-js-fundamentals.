function lastIndexOf(listOfNumbers, number){
  let result = -1; 
  for (let i = 0; i < listOfNumbers.length; i++){
    if (listOfNumbers [i] == number){
      result = i;
    }
    
  }
  return result;
}