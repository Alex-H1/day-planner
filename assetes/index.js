let text = $("textarea");

// displays the header date
function time() {
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
}

// checks time for each text box
function checkTime() {
    for(let i = 0; i < text.length; i++) {
        // gives military time 
        let currentTime = moment().format("H");      
        let rowTime = text[i].id;
        // test if time block is in the past
        if(rowTime < currentTime) {
            text.addClass("past");
        }    
    }
}
function init() {
    time();
    checkTime();
}

init();