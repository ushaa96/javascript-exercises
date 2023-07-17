# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```
1, 1, 2, 3 
take 2 term and add back to 1 term 
take 3 term and add back to 2 term 


let array = []; 
array [0]= 1; 
array[1] = 1; 
for (i=0; i< 10; i++>){
 let sum = array[i] + array[i+1]; 
 array.push(sum); 
}
return array; 

