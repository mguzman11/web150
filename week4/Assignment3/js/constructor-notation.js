// Set up the object
var painting = new Object();

//set up the properties
painting.name = 'Night Sky';
painting.size = 30;
painting.price= 15;

//setting up the price function
painting.checkPrice = function() {
  return painting.size * painting.price;   
};

var elName = document.getElementById('paintingName'); // Get element
elName.textContent = painting.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('paintingPrice');    // Get element
elRooms.textContent = painting.checkPrice();   // Update HTML with result of method

var elName = document.getElementById('paintingSize'); // Get element
elName.textContent = painting.size;                   // Update HTML with property of the object