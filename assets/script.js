// Wrapped up all the code so that it ensures that all the code isn't run until the browser had finished rendering every element in the HTML.
$(function () {
  // This variable, 'clock', is where I will fill textContent from currentTime.
  var clock = document.getElementById('clock')
  
  // Function to update the currentTime for clock.
  function updateClock() {
    
    // Loading the Day.js library to use as a variable in my functions.
    var currentTime = dayjs();
    
    // Variables for different time parameters(time and date).
    var timeFormat = currentTime.format('HH:mm:ss'); 
    var dateFormat = currentTime.format('dddd, MMMM DD, YYYY'); 

    // This is how the clock's time will be formatted on the application.
    var displayFormat = "Today is " + dateFormat + ", " + timeFormat;

    // This will update the textContent for the clock element, thus displaying the live time loaded from Day.js.
    clock.textContent = displayFormat;
  }

  // Call the updateClock function every second (1000 milliseconds).
  setInterval(updateClock, 1000);

  function nineToFive() {
    // Declaring the value of the parent that will append timeBlock(s).
    var workSchedule = $('#work-schedule')

    // This variable will be used to add the 'past', 'present' and 'future' classes.
    var currentHour = dayjs().format('HH');

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
      `<div id="hour-${displayHour}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${displayHour + ':00'}${meridiem}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`;

      // This adds classes('past', 'present' and 'future') based on the currentHour in comparison to hour(the time entered for each time block).
      if (hour < currentHour) {
        timeBlock = timeBlock.replace('row time-block', 'row time-block past');
      } else if (hour == currentHour) {
        timeBlock = timeBlock.replace('row time-block', 'row time-block present');
      } else {
        timeBlock = timeBlock.replace('row time-block', 'row time-block future');
      }

    // This will create the time blocks under the <div id="#work-schedule">.
    workSchedule.append(timeBlock)
    }
  }
  
  // Calling this function to append the time blocks for the work schedule.
  nineToFive();

  // This will load any saved workData from local storage, displaying as text content for each time block(if saved data exists).
  function loadSavedData() {
    for (var hour = 9; hour <= 17; hour++) {
      var timeBlockId = "hour-" + hour;
      var savedData = localStorage.getItem(timeBlockId);
  
      if (savedData) {
        var data = JSON.parse(savedData);
        var textarea = $("#" + timeBlockId).find('textarea');
  
        textarea.val(data.content);
      }
    }
  }

  // Calling this function to load any of the saved workData to the appended time blocks(after the nineToFive() function is called).
  loadSavedData();

  // This will save any input to the time block's text area to local storage.
  $('.saveBtn').on('click', function(event){
    var saveBtn = $(this);
    var timeBlockId = saveBtn.parent().attr('id');
    var textareaValue = saveBtn.parent().find('textarea').val();

    var workData = {
      id: timeBlockId,
      content: textareaValue
    };

    localStorage.setItem(timeBlockId, JSON.stringify(workData));
    console.log("Save was clicked!");
  })
});
