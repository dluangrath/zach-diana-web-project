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

  

  // let futureDate = new Date(2022, 0, 14, 7, 30, 0);
//   class Futuretime {
    
// }

  

  // function newDate(futureDate) {
  
  // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let futureDate = new Date(Date.UTC(2022, 0, 18, 19, 0, 0));
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth(); 
  month = months[month];
  
  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];
 
  

  
  deadlineDate.textContent = `deadline is on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

  // future time in MS 
  const futureTime = futureDate.getTime();

  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  
  // values in miliseconds
  let miliseconds = class {

      constructor() {
        this.oneDay = 24 * 60 * 60 * 1000;
        this.oneHour = 60 * 60 * 1000;
        this.oneMinute = 60 * 1000;
      }

      let days = t / this.oneDay;
      days = Math.floor(days);
      let hours = Math.floor((t % this.oneDay) / this.oneHour);
      let minutes = Math.floor((t % this.oneHour) / this.oneMinute);
      let seconds = Math.floor((t % this.oneMinute) / 1000);
    // const oneDay = 24 * 60 * 60 * 1000;
    // const oneHour = 60 * 60 * 1000;
    // const oneMinute = 60 * 1000;
};

console.log(miliseconds);

    // calculate all values
  
    // let days = t / oneDay;
    // days = Math.floor(days);
    // let hours = Math.floor((t % oneDay) / oneHour);
    // let minutes = Math.floor((t % oneHour) / oneMinute);
    // let seconds = Math.floor((t % oneMinute) / 1000);

    // values array
    const values = [days, hours, minutes, seconds];
    
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