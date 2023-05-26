
function updateClock() {
  
  // Get the current time
  var currentTime = new Date();

  // Extract hours, minutes, and seconds
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros to minutes and seconds
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Format the time as a string
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Display the formatted time in the clock element
  document.querySelector(".clock").textContent = timeString;

}



// Call the updateClock function once to initialize the clock
updateClock();


// Update the clock every second
setInterval(updateClock, 1000);
