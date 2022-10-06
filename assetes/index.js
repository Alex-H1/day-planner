// displays the header date
function time() {
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
}

// checks time for each text box
function checkTime() {
    var sum;
    for(let i = 0; i < $("textarea").length; i++) {
        sum = 9 + i;
        
        // gives military time 
        var currentTime = moment().format("H");
        
        console.log($("textarea")[i])
        // test if time block is in the past
        if(sum > currentTime) {
            // text.add(".past");
        }    
    }
}
function init() {
    time();
    checkTime();
}

init();