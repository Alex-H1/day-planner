
let text = $("textarea");
let currentTime = moment().format("H");

// displays the header date
function time() {
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
}

// checks time for each text box
function checkTime() {
    for(let i = 0; i < text.length; i++) {
        
        
        // convert to number from string
        let parseTime = parseInt(currentTime);
        let parseRow = parseInt(text[i].id);
        
        $(text[i].id).removeClass(".past .present .future")
        
        if(parseRow < parseTime) {
            console.log(parseTime)
            $(text[i]).toggleClass("past");
        }
        if (parseRow == parseTime) {
            $(text[i]).toggleClass("present");
        } 
        if (parseRow > parseTime) {
            $(text[i]).toggleClass("future");
        }
    }
}

function init() {
    time();
    checkTime();
}

init();

