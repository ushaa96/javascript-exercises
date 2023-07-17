const leapYears = function(a) {
    let remainder = 0; 
    return a%4 === 0 && (a % 100 !== 0 || a%400 === 0)
}
const result = leapYears(2000);
console.log(result);

// Do not edit below this line
module.exports = leapYears;
