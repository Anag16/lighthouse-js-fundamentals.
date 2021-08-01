function concat(array1,array2){

  let newArray = [];
  if (array1.length > 0){
    for (let i = 0; i < array1.length; i++){
      newArray.push(array1[i]);
    }
  }
  if (array2.length > 0){
    for(let i = 0; i < array2.length; i++){
      newArray.push(array2[i]);
    }
  }
  return newArray;
}