var todayDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todayDate);


$(".saveBtn").click(function () {
    console.log("Save");
})

var timeBlock = $(".time-block").clone();
var hour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Remove initial row so that it's easier to create our list. We just use it as a 
// prototype for other rows.
$(".time-block").remove();

// Make a row for each hour in the day.
for (let i = 0; i < 8; i++) {
    var row = timeBlock.clone();
    row.find(".hour").append(hour[i]);

    row.appendTo(".container");
}

