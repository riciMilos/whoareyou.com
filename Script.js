alert('Hi There, We Were Waiting For You.')
console.log ('%c IF you have to use the console then you are obviesly dumb!', 'color:blue;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')



// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2020 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
 
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

  document.getElementById("Countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "IP of another website";
  }
}, 1000);

function init() {
    var count = 60; 
    var counter = setInterval(timer, 1000 * count);

    function timer() {
        alert("Nothing is pointless.")
        
    }

}

window.onload = init;