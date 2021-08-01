function sumLargestNumbers(arrayOfNumbers){

let number = 0;

arrayOfNumbers.sort();

for(let i = (arrayOfNumbers.length - 1); i >= (arrayOfNumbers.length - 2); i--{
	number = number + arrayOfNumbers[i];
}
return number;
}