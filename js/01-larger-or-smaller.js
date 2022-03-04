/*
Larger or Smaller?
Usage: Use simple conditional statements
Create an application that accepts two integers within two separate prompts. 
Then,  display only the larger of the two within the browser window. 

Don’t forget to handle the fact that the two could be equal.


*/




let numOne
let numTwo
numOne = parseInt(prompt("Input the First number", "0"));
numTwo = parseInt(prompt("Input the Second number", "0"));
if(parseInt(numOne) > parseInt(numTwo)) 
  { 
    document.write("The larger number is"+ numOne+ ".");
  }   
else if(parseInt(numTwo) > parseInt(numOne)) 
  {
    document.write("The larger of is "+ numTwo+ ".");
  }                  
else
  {
   document.write("The values "+ numOne+ " and "+numTwo+ " are equal.");
  }