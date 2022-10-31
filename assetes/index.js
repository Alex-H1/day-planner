let text = $("textarea");
let btn = $(".saveBtn");
let boxText;

let currentTime = moment().format("H");

// displays the header date
function time() {
  $("#currentDay").text(moment().format("dddd,MMMM Do"));

  for (let i = 0; i < text.length; i++) {
    $(text[i]).text(localStorage.getItem("plan"));
  }
}

// checks time for each text box
function checkTime() {
  for (let i = 0; i < text.length; i++) {
    // convert to number from string
    let parseTime = parseInt(currentTime);
    let parseRow = parseInt(text[i].id);

    $(btn[i]).on("click", function () {
      boxText = $(text[i]).val();
      savePlan(boxText);
    });

    if (parseRow < parseTime) {
      $(text[i]).toggleClass("past");
    } else if (parseRow == parseTime) {
      $(text[i]).toggleClass("present");
    } else if (parseRow > parseTime) {
      $(text[i]).toggleClass("future");
    }
  }
}

function savePlan(text) {
  localStorage.setItem("plan", `${text}, ${moment().format("MMM Do YY")}`);
}

function init() {
  time();
  setInterval(checkTime(), 600000);
}

init();
