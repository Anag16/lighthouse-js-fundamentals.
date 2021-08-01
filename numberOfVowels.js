const numberOfVowels = function(data) {
  let result = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
       result += data[i]
    }
  }
  return result.length = (result.length--)
};

console.log(numberOfVowels("orange")); //prints 4
console.log(numberOfVowels("lighthouse labs")); //prints 6
console.log(numberOfVowels("aeiou")); //print 6