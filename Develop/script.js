var todayDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todayDate);


var timeBlock = $(".time-block").clone();
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var descriptions = ["", "", "", "", "", "", "", ""];
let STORAGE_TIME_BLOCK_KEY = "description-list";
let storedDescriptions = localStorage.getItem(STORAGE_TIME_BLOCK_KEY);
if (storedDescriptions !== null) {
    descriptions = JSON.parse(storedDescriptions);
}

// Remove initial row so that it's easier to create our list. We just use it as a 
// prototype for other rows.
$(".time-block").remove();

// Make a row for each hour in the day.
for (let i = 0; i < hours.length; i++) {
    var row = timeBlock.clone();
    row.find(".hour").append(hours[i]);
    row.find(".hour").data("hourOfDay", i + 9);

    row.find(".saveBtn").data("rowIndex", i);
    row.find(".description").append(descriptions[i]);
    row.appendTo(".container");


}

//  Save Button
$(".saveBtn").click(function (e) {
    let rowIndex = $(e.currentTarget).data("rowIndex");
    // descriptions[rowIndex] = 
    let newDescription = $(".description")[rowIndex];
    // updating one element of the array
    descriptions[rowIndex] = newDescription.value;
    localStorage.setItem(STORAGE_TIME_BLOCK_KEY, JSON.stringify(descriptions));
    console.log(rowIndex);
})


// Colour coded blocks
function trackingHour() {
    var hourOfDay = moment().hour();
    $(".time-block").each(function (index, timeBlockElement) {
        timeBlockElement = $(timeBlockElement);

        timeBlockElement.removeClass("past");
        timeBlockElement.removeClass("present");
        timeBlockElement.removeClass("future");


        var rowHour = timeBlockElement.find(".hour").data("hourOfDay");
        if (rowHour < hourOfDay) {
            timeBlockElement.addClass("past");
        } else if (rowHour === hourOfDay) {
            timeBlockElement.addClass("present");
        } else if (rowHour > hourOfDay) {
            timeBlockElement.addClass("future");
        }
    })
}

setInterval(trackingHour, 1000);
trackingHour();




