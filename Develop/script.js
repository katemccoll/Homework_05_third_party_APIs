var todayDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todayDate);


$(".saveBtn").click(function () {
    console.log("Save");
})

var timeBlock = $(".time-block").clone();

for (let i = 0; i < 7; i++) {
    timeBlock.clone().appendTo(".container");
}
