# Workday Scheduler (ﾉ◕ヮ◕)و✎⮹ 
The purpose of this application was to utilize API(Day.js) to create a workday schedule application. This application would be able to display the current date and time, and save any of the user data that was input, to local storage. 

Additionally, the time blocks(9:00AM-5:00PM) would acquire certain classes(.past, .present, .future) in depending on the time of day: 
* If the time has 'past', then the container would be grey.  
* If the current time was 'present', then the container would be red.  
* If the current time has yet to meet 'future' time block(s), then the container would be green.  

![Work Day Scheduler](https://github.com/byronontheboard/js-work-planner/assets/127366720/c3f674f8-6926-4122-ba7e-9c3973412afe)
_____
## Acceptance Criteria
### ***GIVEN*** I am using a daily planner to create a schedule.  
***WHEN*** I open the planner. 
***THEN*** the current day is displayed at the top of the calendar.  
***WHEN*** I scroll down.  
***THEN*** I am presented with time blocks for standard business hours of 9am to 5pm.  
***WHEN*** I view the time blocks for that day.  
***THEN*** each time block is color-coded to indicate whether it is in the past, present, or future.  
***WHEN*** I click into a time block.  
***THEN*** I can enter an event.  
***WHEN*** I click the save button for that time block.  
***THEN*** the text for that event is saved in local storage.  
***WHEN*** I refresh the page.  
***THEN*** the saved events persist.  
_____
## Input/Save User Data
By clicking any of the time block containers, the user is able to input any text, and save that data to local storage by clicking the 'Save' icon to the right of each section.

![Work Day Scheduler (1)](https://github.com/byronontheboard/js-work-planner/assets/127366720/792f4a4c-2afb-40ac-8c01-37cec95a721f)
_____
