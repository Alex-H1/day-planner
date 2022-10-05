// function time(){
//     $("#currentDay").text(moment().format("dddd,MMMM Do"));
    
//     $(".time-block").each(function(){
//         var blockText =$(this).attr("id");
//         $(".text").text(localStorage.getItem(moment().format("MMM Do YYYY")));

//     });
//     $(".saveBtn").on("click", setLocal);

// };

// var timeBlockEl = $(".col-8");
// var checkTime = moment().format("H");

// function checkBlock(){
    
//     var timeBlockEl = $(".col-8")
//     for(var i = 0; i< timeBlockEl.length; i++){
//         var tArea=timeBlockEl[i].id;
//         var changeColour = document.getElementById(timeBlockEl[i].id);
//         // removes old classes
//         $(timeBlockEl[i].id).removeClass(".present .past .future");

//         if(tArea < checkTime){
//             $(changeColour).addClass("past");
//         }else if(tArea > checkTime){
//             changeColour.addClass("future");
//         }else{
//             changeColour.addClass("present");
//         };
//     } ;
// };

// function setLocal(){
//     var text = $(this).parent().attr("id")
//     localStorage.setItem(moment().format("MMM Do YYYY"), + text, $("textarea").val());
//     return;
// }

// // checks  every ten mins 
// setInterval(checkBlock(),(600000));
// checkBlock();
// time();

function time() {
    $("#currentDay").text(moment().format("dddd,MMMM Do"));
}

function init() {
    time();
}

init();