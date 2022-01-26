# zach-diana-web-project

JavaScript Web-Project 

Creating a Countdown Clock using HTML/CSS,  Vanilla Javascript


Key concepts covered:
getFullYear()
getMonth()
getDate()
Math.floor()
setInterval()
clearInterval()
Core Features: 
Counts down days/hours/mins/secs. 
When timer ends a message will display
 
Countdown clock steps: 
Rough draft due date: January 11 2022 9:00pm 
Set year, day, hour, min, sec
Stops at 00:00
Pop-up message at the end of countdown
Alert in browser(?)
Allow browser to recognize beginning/end time
 
Collab Dates:
1/5/22: 
Started the project by creating a Devlog and finding resources to help on the project. 
Outlined 
Key features 
Simple Steps 
Created a github repository

1/10/22:
Continued to use references to understand project functions 
Began JavaScript app and declared variables
querySelector & querySelectorAll

1/11/22:
Set setInterval() and clearInterval()
Set interval to call getRemainingTime every 1000ms and then invoke it 
Added innerHTML to display timer and a message after timer ends
 
1/13/22: 
Stuck on the coding process and how to change the time to display the seconds less than 10. 
Issue with converting military time to standard time
Issue with implementing OOP into the project
 
1/17/22:
Attempted to create a function new Date(), but had difficulty displaying timer and date. Went back to square 1 and removed function. 
Tried to implement OOP to project - a work in progress..
Create a class for calculations and time settings
 
1/18/22:
Set values into class & constructor function
Changed a function into class 
Set up a constructor function that sets this moment in time & does calculations needed to instantiate moment in time object
Used an arrow function rather than the function expression
 () => {}
 
1/19/22:
Finishing up project
Got minutes to display :00
Previously would display 4:9 for 4:09 
Having a hard time with the hours.
Not displaying the correct hour
Entering a wacky number to display the correct hour 
Issue with getting wacky numbers (hours) could be in: let futureDate = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
solution: let futureDate = new Date('January 20, 2022 21:00:00');
 
 
 
Why we decided to do this project : 
	Thought it would be a great beginner project to learn some basic concepts 
 
If we could put more time into it what would we add: 
	Maybe some buttons that can add more functionality to the countdown clock 
	Convert military time into standard time 
  
References: 
https://www.youtube.com/watch?v=3PHXvlpOkf4&t=2644s
https://github.com/john-smilga/javascript-basic-projects/blob/master/12-countdown-timer/final/app.js
JavaScript DOM Document (w3schools.com)
JavaScript / Date.setMonth — DevDocs
