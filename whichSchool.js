const whichSchool = function(age){
  let result = "";
  if(age < 13) {
    result = 'Elementary School';
  }
  else if(age >= 13 && age <= 18) {
    result = 'Secondary School';
       
  }
    else{
    result = 'Lighthouse Labs';
  }
   
  return result;
} 
