// Create variables
var sum = 0;
var count = 0;
var scores = 0;

// Creates the average function
averageScore();

function averageScore(){
    
    //create the while loop that adds each score and counts how many times the loop is ran
    while(scores !== 999) {
        //use parseInt and prompt to display the prompt
        scores = parseInt(prompt("Enter test score\n" + "Or enter 999 to end entries\n")); 

        sum += scores;  

        count++;   
        
    }
}
//account for the addition of 999 to end the while loop; 
var average = (sum - 999)/(count - 1); 
alert("Average score is " + average);