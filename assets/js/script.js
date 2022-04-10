// var for fast changing time schedule
var startWork = 9;
var endWork = 20;

// the current day displayed at the top of the calendar    
var getCurrentDate = function () {
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);
};

// if time > 12 + pm then time - 12 + pm if time <12 time + am
var checkAmPm = function (time) {
    if (time > 12) {
        return time - 12 + ":00 pm";
    } else if (time === 12) {
        return time + ":00 pm"
    } else {
        return time + ":00 am"
    }
};


// create time blocks and standard business hours
// we need to have a container with fields for 9 - 5pm 
var createSchedule = function (startTime, endTime) {
    for (var i = startTime; i <= endTime; i++) {
        // creates a text area
        var textArea = $('<textarea>')
            .addClass('col-6 col-md-10 task')
        // i can input text as event

        // creates save button
        var saveBtn = $('<button>')
            .addClass('btn saveBtn col-3 col-md-1')
            // we will change it to save icon
            // .text("Save")
            // i didnt like what iconify stores cache in local storage
            .append($("<span>").addClass("far fa-save"));



        // creates hour display need to be done in am pm
        var hourDiv = $("<div>")
            .addClass("col-3 col-md-1 hour text-left pl-0")
            // checks if we need to print ap or pm and change to 12 hour format
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



        // add div textarea and button inside the div that inside the container class
        $(".container").append(hourContainer.append([
            hourDiv,
            textArea,
            saveBtn
        ]));
    }
};

var saveLocal = function () {// this will return time in 24 format where clicked
    $('.time-block').on('click', '.saveBtn', function () {
        // get an number (9) of hour from id='hour-9'
        var idHour = $(this)
            .parent()
            .attr('id');

        // gets text from textarea there save btn is pressed
        var text = $(this)
            .siblings('.task')
            .val()
            .trim();

        // event on click button save. saves text into local storage
        // saves it to localStorage
        localStorage.setItem(idHour, text);
    });
};

var loadTasks = function () {
    // don't get how to use .each() in jquery so did it this way.
    // for each hour we have in work day
    for (var hour = startWork; hour <= endWork; hour++) {
        //find every div with id hour-(hour number) + class task to target textarea and update it's value from local storage if any information provided with key = "hour-(hour number)".
        $('#hour-' + hour + " .task").val(localStorage.getItem('hour-' + hour));
    }
};

// what time is to understand if it past or not yet
var pastPresentFutureCheck = function () {
    // using moment.js get current hour to compare in the schedule
    var currentHour = moment().hour();
    // for every hour line do function
    $('.time-block').each(function () {
        // takes an hour from id makes it number for comparing
        var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
        // the field in past should have grey background
        // check if the time past or not and current
        if (blockHour < currentHour) {
            $(this).children(".task").addClass("past");

            // the active hour field should be red background
        } else if (blockHour === currentHour) {
            $(this).children(".task").addClass("present");

            // the future fields should be in green color
        } else {
            $(this).children(".task").addClass("future");
        }
    });
};

// displays the day in the header
getCurrentDate();
createSchedule(startWork, endWork);
pastPresentFutureCheck();
// continue to check if hour past every minute
setInterval(function(){
    pastPresentFutureCheck();
    
}, 1000*60)
loadTasks();
// save the data to localStorage
saveLocal();
