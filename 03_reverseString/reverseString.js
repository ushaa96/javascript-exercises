const reverseString = function(text) {
    let string = text; 
    const array = string.split("");
    const length = array.length; 
    let newText = ""; 

    for (let i = length-1; i >=0; i--) {
       newText += array[i];
    }

    return newText;
};

const result = reverseString("Hello");
console.log(result);

// Do not edit below this line
module.exports = reverseString;

// define an array 
// split the letters into an array 
// arrange the array with the last one first. 