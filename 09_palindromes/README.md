# Exercise 09 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('raceecar') // true
palindromes('tacos') // false
```

racecar 

split the word into an array 
get length 
get the last letter of word 
keep checking while first letter of array matches with last letter of array
even if one letter is not a match return, this is not a palindrome 

