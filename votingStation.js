const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(list){
  let goodStations = [];
  for(let i = 0; i < list.length; i++){
      if(list[i][1] >= 20 && (list[i][2] == 'school' || list [i][2]== 'community centre')){
          goodStations.push(list[i][0]);
      }
  }
  return goodStations;
}



console.log(chooseStations(stations));