function ageCalculator(name,yearOfBirth,currentYear){
  let age = currentYear - yearOfBirth;
  let text =  name + " is " + age + " years old.";
  return text;
}