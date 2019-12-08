var treasureLocation = Math.floor(Math.random() * 24);
var bombLocation = Math.floor(Math.random() * 24);
if (treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 24);
}
var counter = 25
function checkPosition(id){
  if (treasureLocation === id){
    document.getElementById(id).innerHTML = "&#x1f320";
  }
  if (bombLocation === id){
    document.getElementById(id).innerHTML = "&#x2620";
  }
  if (treasureLocation !== id && bombLocation !== id ){
    document.getElementById(id).innerHTML = "&#x1f332";
  }
  counter = counter - 1;
  document.getElementById("counter").innerHTML = counter;
  if (treasureLocation === id){
    document.getElementById("counter").innerHTML = "You WIN!";
  }
  if (bombLocation === id){
    document.getElementById("counter").innerHTML = "You LOSE!";
  }
  if (bombLocation === id){
    document.getElementById("turns").innerHTML = "";
  }
  if (treasureLocation === id){
    document.getElementById("turns").innerHTML = "";
  }
}
