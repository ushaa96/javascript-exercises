const removeFromArray = function(array, ...theArgs) {
    const newArray = []; 
    array.forEach((item) => {
        if (!theArgs.includes(item)){
            newArray.push((item));  
        }
    });
    return newArray;
};

const result = removeFromArray([1,2,3,4],3);
console.log(result);


// Do not edit below this line
module.exports = removeFromArray;
