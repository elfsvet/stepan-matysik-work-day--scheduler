// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist




var schedule = [];
// object to store and update values in localStorage and from what we get as input
// var container = $(".container");
// for (var time = 9; time <18; time++){
//     container.append("<"
// };
// the current day displayed at the top of the calendar    
// to display the day we are at...the header in paragraph
var getCurrentDate = function () {
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);
};






// create time blocks and standard business hours
// we need to have a container with fields for 9 - 5pm 
// on the right should be display an hour.

// created hour div
var createSchedule = function (startTime, endTime) {
    for (var i = startTime; i <= endTime; i++) {
        // creates a text area
        var textArea = $('<textarea>')
            .addClass('col-md-10 task')

        // creates save button
        var saveBtn = $('<button>')
            .addClass('btn saveBtn col-md-1')
            // we will change it to save icon
            .text("Save")
            .append($("<span>").addClass("iconify").attr("data-icon", "zmdi:floppy"));




        // creates hour display need to be done in am pm
        var hourDiv = $("<div>")
            .addClass("col-md-1 hour")
            .text(checkAmPm(i))

        // creates a container with all time blocks in one for easy adjustments
        var hourContainer = $('<div>')
            // to add an id we will use attr can we use prop? Yes we could use prop instead
            .attr("id", "hour-" + i)
            .addClass("row time-block");
        // we can add it like this or use one append(content[content1,content2]) at the end directly to the container.
        // .append(hourDiv)
        // .append(textArea)
        // .append(saveBtn);



        // add div in the div with container class
        $(".container").append(hourContainer.append([
            hourDiv,
            textArea,
            saveBtn
        ]));
    }
};






// the field in past should have grey background
// the active hour field should be red background
// the future fields should be in green color

// event on click in the time blocks i can input text as event

// event on click button save. saves text into local storage
// every field should have a save button to save in localstorage on the left

// refresh the page should keep only saved events.



// if time >= 12 then time - 12 + pm
// if time <12 time + am
var checkAmPm = function (time) {
    if (time > 12) {
        return time - 12 + ":00 pm";
    } else if (time === 12) {
        return time + ":00 pm"
    } else {
        return time + ":00 am"
    }
}






















// save the data to localStorage

// load the data function

// displays the day in the header
getCurrentDate();
createSchedule(9, 17);
