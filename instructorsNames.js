const instructorWithLongestName = function(instructors){

  let longestName = instructors[0].name
 
  
  for (let i = 0; i < instructors.length; i++){
    let nameLength = instructors[i].name.length;

        if (instructors[i].name.length > longestName.length) {
          longestName = instructor[i].name
}
}
  return longestName;
  
