//set up the event handler
window.onload = function() {
  
  //create the function that will 
  function calculateMilesPerGallon() {

      //create variables and set to parseInt to read a number
      var getMiles = parseInt(document.querySelector('.milesDriven').value);
      var getGallons = parseInt(document.querySelector('.gallonsUsed').value);
      //calcuation
      var calculateMpg = getMiles/getGallons;
  
      //disable the last input field
      document.querySelector('.calMpg').disabled = true; 
      //obtain values from user input
      document.querySelector('.milesDriven').value = getMiles;
      document.querySelector('.gallonsUsed').value = getGallons;
      document.querySelector('.calMpg').value = calculateMpg;
  }
  
      //triggers even click 
      var clickButton = document.querySelector('#btn');
      //display calculation
      clickButton.addEventListener('click', calculateMilesPerGallon, false);
      //gray out last input field
      document.querySelector('.calMpg').disabled = true;
  }