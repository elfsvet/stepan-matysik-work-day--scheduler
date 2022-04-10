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
var container = $(".container");
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
    for (var i = 9; i<=17;i++) {
        
        var newTextArea = $('<textarea>')
        .addClass('col-md-10 task')
        
        var newBtn = $('<button>')
        .addClass('btn saveBtn col-md-1')
        .text("Save");
        
        var newHourDiv = $("<div>")
        .addClass("col-md-1 hour")
        .text(i+ ":00")
        
        var newHourContainer = $('<div>')
        .attr("id", "hour-"+i)
        .addClass("row time-block")
        .append(newHourDiv)
        .append(newTextArea)
        .append(newBtn);



        // add div in the container
        container.append(newHourContainer);
    }






    // the field in past should have grey background
    // the active hour field should be red background
    // the future fields should be in green color
    
    // event on click in the time blocks i can input text as event
    
    // event on click button save. saves text into local storage
    // every field should have a save button to save in localstorage on the left

    // refresh the page should keep only saved events.
    
    
    
    























// save the data to localStorage

// load the data function

// displays the day in the header
getCurrentDate();
