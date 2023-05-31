// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Initializing variables for the functions that I will create.
    // This clock is where I will fill textContent from currentTime.
  var clock = document.getElementById('clock')
  var loadingDots = clock.querySelector('span');
  
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
