var today = moment().format("dddd, Do MMMM YYYY");
$("#currentDay").text(today);

var currentHour = moment().hour();
var timeblock = $(".row");

//Loop through timeblock html rows
for (let i = 0; i < timeblock.length; i++) {
    //get current textarea & text areaid for comparison
    var currentTimeBlock = timeblock.eq(i);
    var blockId = parseInt(currentTimeBlock.attr("id"));
    var textArea = currentTimeBlock.children("textarea");

    //compare current textareaid with currenthour
    if (blockId === currentHour) {
        textArea.addClass("present");
    } else if (blockId > currentHour) {
        textArea.addClass("future");
    } else {
        textArea.addClass("past");
    }
}
