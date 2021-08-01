function judgeVegetable(listOfVeggies,Characteristic){
  let name= "";
  let score = "";
  for(let i = 0; i < listOfVeggies.length; i++){
    if (listOfVeggies[i][Characteristic] > score){
      score = listOfVeggies[i][Characteristic];
      name =listOfVeggies[i]["submitter"];
    }
  }
  return name;
}