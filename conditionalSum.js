const conditionalSum = function(values, condition) {
    const even = [];
    const odd = [];
    if (values && values.length) {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        even.push(values[i]);
        } else { 
         odd.push(values[i]);
        }
      }
      let sum = 0;
      if (condition === 'even') {
        for (let j = 0; j < even.length; j++) {
          sum = sum + even[j];
        }
        return sum;
      } else if (condition === 'odd') {
          for (let k = 0; k < odd.length; k++) {
            sum += odd[k];
        }
        return sum; 
        } else { console.log('Condition invalid or not specified. Try again!'); }
      } else { 
        return '0'; 
      }
    };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([],"odd"));
  console.log(conditionalSum([2, 7, 14, 28, 42, 91],"even"));
