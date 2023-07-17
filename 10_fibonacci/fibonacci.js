const fibonacci = function(number) {
    let array = [1, 1];
  
    for (let i = 0; i < 100; i++) {
      let sum = array[i] + array[i + 1];
      array.push(sum);
    }
  
    const result = array[number-1];
    console.log(result);
  };
  
  fibonacci(6)

// Do not edit below this line
module.exports = fibonacci;
