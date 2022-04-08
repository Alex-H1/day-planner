function time(){
    $("#currentDay").text.moment().format("MMM Do YY");
}
var timeBlockEl = $(".col-8")

var checkTime = moment().format("H");

function checkBlock(){
    
    var timeBlockEl = $(".col-8")
    for(var i = 0; i< timeBlockEl.length; i++){
        var tArea=timeBlockEl[i].id;
        var changeColour = document.getElementById(timeBlockEl[i].id);
        // removes old classes
        $(timeBlockEl[i].id).removeClass(".present .past .future");

        if(tArea < checkTime){
            $(changeColour).addClass("past");
        }else if(tArea > checkTime){
            changeColour.addClass("past");
        }else{
            changeColour.addClass("present");
        };
    } ;
};

var schedule;
function setLocal(){
    schedule = $(".text").val;
    localStorage.setItem(schedule,"schedule");

}

function getLocal(){
    localStorage.getItem(JSON.stringify (schedule));

}

setInterval(checkBlock(),(600000));
checkBlock();

var tArea;
console.log(schedule,"schedule");

$(".saveBtn").on("click", setLocal);