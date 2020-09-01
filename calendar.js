// create a variable inside our variable 
// we are going to create a function that will take in a date

var Calendar = function(date){
    
    // we need to break the data into three different identities/ month-day-year
    var year = date.slice(0,4);
    // we are using splice to divide the date 0,4 is the position for 2017
    var month = date.slice(5,7)-1;
    // same thing with the month and day
    var day = parseInt(date.slice(8));

    // we are going to parse the day so we take away the "0" infront of any other number example : 01,02 etc

   

    // we want the name of the month to print not just the numbers
//    we have 12 months in a year so we can create a variable that will hold those months

      const monthsName=["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


    //  now we need the correct suffix for the days, example: st,nd,th,rd,
    // lets use a switch statement and make cases for each possible suffix
    var suffix;
    switch(day){
        case 1:
        case 21:
        case 31:
            suffix= "st";
            break;
            // we want this case to stop after 31st so we use break;
        case 2:
        case 22:
            suffix= "nd";
            break;  
            // we want this case to stop after 22nd so we use break;
        
        case 3:
        case 23:
    
            suffix= "nd";
            break; 
             // we want this case to stop after 23nd so we use break;

             default:
                 suffix ="th";
                 break;
                //  this is saying that anything else default it to "th"

    }

      // Now we can splice them together in the way we want example: month first, then day and year
      var dateString = monthsName[month] + " " + day + suffix + " " + year;
      return dateString;


}
console.log(Calendar("2017/05/24")); 
console.log(Calendar("2019/04/17")); 
console.log(Calendar("2013/10/01")); 
console.log(Calendar("1992/12/26")); 
// we are passing the date as a string
