function CustomAlert(){
  this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH+"px";
      dialogbox.style.left = (winW/2) - (550 * .5)+"px";
      dialogbox.style.top = "200px";
      dialogbox.style.display = "block";
      document.getElementById('dialogboxhead').innerHTML = "Nothing is random.";
      document.getElementById('dialogboxbody').innerHTML = dialog; }
  this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none"; }
}
var Alert = new CustomAlert();
Alert.render('There is no going BACK from here.')

console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
console.log ('%c Leave Console or regret!', 'color:red; font-size:30px; font-weight:bold;')
var countDownDate = new Date("December 9, 2021 00:00:00").getTime();
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
    document.getElementById("theHidden").style.display= "block";
  } if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML= "No way out";
    document.getElementById("Countdown").style.animation="animate 6s linear infinite;";
    document.getElementById("theHidden").style.display="block";
    document.getElementById("getIt").innerHTML="You've earned it.";
  }
}, 1000);
function init() {
    var count = 150; 
    var counter = setInterval(timer, 1000 * count);
    function timer() {
        Alert.render("-. --- - .... .. -. --. / .. ... / . -- .--. - -.--") }
}
window.onload = init;
function puzzle1(){
  Alert.render('01000010');
} 
function puzzle2(){
  Alert.render('00110000');
} 
function puzzle3(){
  Alert.render('01000100');
} 
function puzzle4(){
  Alert.render('00110001');
} 
