//#1
//display the class 

//call the ID to obtain the proper class
var bookTitle = document.getElementById('three'); 
//get the class
if (bookTitle.hasAttribute('class')) {         
  // assign the class to a variable
  var orgin = bookTitle.getAttribute('class');  
 
  // write the results to the page
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>Brave New World is written by a ' + orgin + ' author </p>';
}

//#2

//select element that needs to be updated
var el = document.getElementById('two');
// Changes the class from British to American
el.className = 'American';

//#3
// Add a new book to list

// Create a new element and keep it in a variable
var newEl = document.createElement('li');
 
// Create a text node and store it in a variable.
var newText = document.createTextNode('Lord of The Flies');
 
// Attach the new text node to the new element.
newEl.appendChild(newText);
 
// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];
 
// Insert the new element into its position.
position.appendChild(newEl);

//#4
//change a title in the list

//get the element assign to a variable
var bookTitle2 = document.getElementById('five');  
//assign the variable to a new varible that will tell it where to go
var elText  = bookTitle2.firstChild.nodeValue; 
//swap titles 
elText = elText.replace('To Kill A Mockingbird', 'The Great Gatsby');  
//display the swap 
bookTitle2.firstChild.nodeValue = elText; 