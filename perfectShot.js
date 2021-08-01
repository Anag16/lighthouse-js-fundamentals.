const moves = ['north', 'north', 'west', 'north', 'east','north']  

function finalPosition(moves){
  let x = 0; 
  let y = 0;

  for(let i = 0 ; i < moves.length ; i++){
    if(moves[i] == 'north'){
      y++;
    }
    if(moves[i] == 'south'){
      y--;
    }
    if(moves[i] == 'west'){
      x--;
    }
    if(moves[i] == 'east'){
      x++;
    }  
  }
  return [x, y]
}
