//Current Date and Hour using Moment.js Library
var today = moment().format("dddd, Do MMMM YYYY");
$("#currentDay").text(today);
var currentHour = moment().hour();

//Main variables
var timeblock = $(".row");
var saveButton = $('.saveBtn');
var clearButton = $('.clear');
var textAreaInput = $('textarea');

//Loop through timeblock html rows
for (let i = 0; i < timeblock.length; i++) {
    //get current textarea & text areaid for comparison
    var currentTimeBlock = timeblock.eq(i);
    var blockId = parseInt(currentTimeBlock.attr("id"));
    var textArea = currentTimeBlock.children("textarea");

    //compare current textareaid with currenthour 
    //to set colours on page load/refresh
    if (blockId === currentHour) {
        textArea.addClass("present");
    } else if (blockId > currentHour) {
        textArea.addClass("future");
    } else {
        textArea.addClass("past");
    }
    
    //return values from local storage on page refresh/load
    var savedInput = localStorage.getItem(String(blockId));
    textArea.text(savedInput);
}

//Save Button functionality to save user input
saveButton.on('click', function(){
    var parentRowId = $(this).parent().prop("id");
    var parentRow = $(this).parent();
    var textInput = parentRow.children('textarea').eq(0).val();
    localStorage.setItem(parseInt(parentRowId), textInput);

});

//Clear Events Button functionality to clear inputs
clearButton.on('click', function(){
    localStorage.clear();
    textAreaInput.val('');
});
