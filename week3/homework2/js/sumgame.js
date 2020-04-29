  //set up initial windo prompt
  var name= window.prompt ("Let's play the sum game. Please enter your name.");
  //set up variables for numbers by using parseInt
  var num1= parseInt(window.prompt ("Enter the first number."));
  var num2= parseInt(window.prompt ("Enter a second number."));
 
//add numbers
  var total= num1+num2;

  //write to page
    document.write("Hi, " + name + "! The sum of " + num1 + " + " + num2  + " is: " + total);
  


  