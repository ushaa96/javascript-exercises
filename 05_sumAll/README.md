# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

- take a variable 
- fetch the second parameter from the function and store that as length 
- for i> greater than first parameter add each of the functions 

const sumAll = function(a,b) {
    for (const i=a; i<=b; i++) {
    let totalSum += i; 
  }
    return totalSum;
};

const result = sumAll(1,4);
console.log(result);