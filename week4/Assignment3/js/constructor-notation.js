//create the template function
function Painting(name, size, price){
  this.name= name;
  this.size= size;
  this.price= price;
  this.checkPrice = function (){
    return this.size * this.price;
  }
}

//create the first object
var nightskyPainting= new Painting ('Night Sky', 28, 30);

//create the second object
var dayskyPainting= new Painting ('Day Sky', 50, 30);


//display first object
var details1= nightskyPainting.name + ' $';
  details1 += nightskyPainting.checkPrice() + ' Size: ';
  details1 += nightskyPainting.size + ' x 24 inches'; 
var elPainting1 = document.getElementById('Painting1');
elPainting1.textContent=details1;


//display the second object
var details2= dayskyPainting.name + ' $';
  details2 += dayskyPainting.checkPrice() + ' Size: ';
  details2 += dayskyPainting.size + ' x 24 inches';   
var elPainting2 = document.getElementById('Painting2');
elPainting2.textContent=details2;