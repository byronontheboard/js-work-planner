// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Initializing variables for the functions that I will create.
    // This clock is where I will fill textContent from currentTime.
  var clock = document.getElementById('clock')
  
  // Function to update the currentTime for clock.
  function updateClock() {
    
    // Loading the Day.js library to use as a variable in my functions.
    var currentTime = dayjs();
    
    // Variables for different time parameters.
    var timeFormat = currentTime.format('HH:mm:ss'); // Format the time
    var dateFormat = currentTime.format('dddd, MMMM DD, YYYY'); // Format the date

    // This is how the clock's time will be formatted on the application.
    var displayFormat = "Today is " + dateFormat + ", " + timeFormat;

    // This will update the textContent for the clock element, thus displaying the live time loaded from Day.js.
    clock.textContent = displayFormat;
  }

  // Call the updateClock function every second (1000 milliseconds)
  setInterval(updateClock, 1000);

  function nineToFive() {
    var workSchedule = $('#work-schedule')

    // This establishes the hour for each time block on the work schedule. 
    // A block will be appended for each time as long as it is equal to 9(9:00AM) and less than 17(5:00PM).
    for (var hour = 9; hour <= 17; hour++) {
      // If the hour is less than 12, the value will be 'AM' for meridiem.
      // If the hour is more than 12, the value will be 'PM' for meridiem.
      var meridiem = (hour < 12) ? 'AM' : 'PM';
      // This will be used to display the hours for each block on the schedule, followed my meridiem to determine whether it is 'AM' or 'PM'.
      var displayHour = (hour > 12) ? hour - 12 : hour;

      // Variable for the times blocks that will be appended(9:00AM-5:00PM).
      var timeBlock = 
      `<div id="hour-(insertTimeIndex)" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${displayHour + ':00'}${meridiem}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`

    workSchedule.append(timeBlock)
    }
  }

  nineToFive();

  // function nineToFive() {
  //   let meridiemSuffix = ''
  //   if(timeFormat >= 9 || timeFormat < 12) {
  //     meridiemSuffix = "AM"
  //   } else {
  //     meridiemSuffix = "PM"
  //   }
  // }

  // function addMeridiemSuffix(timeFormat) {
  //   let meridiemSuffix = '';
  //   if (timeFormat >= '09:00:00' && timeFormat < '12:00:00') {
  //     meridiemSuffix = " AM";
  //   } else if (timeFormat >= '12:00:00' && timeFormat < '17:00:00') {
  //     meridiemSuffix = " PM";
  //   }
  //   return timeFormat + meridiemSuffix;
  // }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').on('click', function(event){
    localStorage.setItem()
    console.log("Save was clicked!")
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
