const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const deadlineDate = document.querySelector('.deadline-date');
  const deadline = document.querySelector('.deadline');
  const stuff = document.querySelectorAll('.deadline-format h4');

  let futureDate = new Date('January 20, 2022 21:00:00');
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth(); 
  month = months[month];
  
  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];

 let currentTime = futureDate; 

 let currentHours = currentTime.getHours();
 if(currentHours < 10) currentHours = '0'+currentHours;

 let currentMinutes = currentTime.getMinutes();
 if(currentMinutes < 10) currentMinutes = '0'+currentMinutes;


  deadlineDate.textContent = `due date is on ${weekday}, ${date} ${month} ${year} At ${currentHours}:${currentMinutes}`;

  // future time in MS 
  const futureTime = futureDate.getTime();

  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  
  // values in milliseconds
  class Time {
    static oneMinute = 60 * 1000;
    static oneDay = 24 * 60 * 60 * 1000;
    static oneHour = 60 * 60 * 1000;
     
        constructor(t) {
          this.days = t / Time.oneDay;
          this.days = Math.floor(this.days);
          this.hours = Math.floor((t % Time.oneDay) / Time.oneHour);
          this.minutes = Math.floor((t % Time.oneHour) / Time.oneMinute);
          this.seconds = Math.floor((t % Time.oneMinute) / 1000);
      }

      array = () => 
        [this.days, this.hours, this.minutes, this.seconds] 
    };

    // values array
    const values = new Time(t).array();

    function format(item) {
      if (item < 10) {
        return item = `0${item}`
      }
      return item
    }

    stuff.forEach(function(item, index) {
      item.innerHTML = format(values[index]);
    });
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">Your assignment is due. Would you like to turn it in?</h4>`;
    }
  }

  // countdown
  let countdown = setInterval(getRemainingTime, 1000);
  getRemainingTime();