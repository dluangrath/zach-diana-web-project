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

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const format = document.querySelectorAll('.deadline-format h4');
  
  let futureDate = new Date(2022, 0, 11, 21, 00, 0);

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth(); 
  month = months[month];
  
  const date = futureDate.getDate();

  const weekday = weekdays[futureDate.getDay()];
  
  giveaway.textContent = `deadline is on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

  // future time in MS 
  const futureTime = futureDate.getTime();
  function getRemainingTime() {
    const today = new Date().getTime();
  }



  getRemainingTime();