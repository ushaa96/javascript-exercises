const sumAll = function(a,b) {
    let totalSum = 0;
    if (a < 0 || b < 0) return "ERROR"; 
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let greater = 0; 
    let lower = 0; 
    
    if (a>b) {
      greater = a;
      lower = b; 
    } else {
      greater = b; 
      lower = a; 
    }
    for (let i=lower; i<=greater; i++) {
    totalSum += i; 
  }
    return totalSum;
};

const result = sumAll(2,[1,2]);
console.log(result);


// Do not edit below this line
module.exports = sumAll;
