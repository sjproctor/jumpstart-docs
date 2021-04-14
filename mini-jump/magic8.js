const magic = () => {
  var randomNum = Math.floor(Math.random() * 5)
  if(randomNum === 0){
    return document.getElementById("answer").innerHTML = "As I see it, yes."
  } else if(randomNum === 1) {
    return document.getElementById("answer").innerHTML = "It is certain."
  } else if(randomNum === 2) {
    return document.getElementById("answer").innerHTML = "Better not tell you now."
  } else if(randomNum === 3) {
    return document.getElementById("answer").innerHTML = "Concentrate and ask again."
  } else if(randomNum === 4) {
    return document.getElementById("answer").innerHTML = "Don't count on it."
  } else {
    return document.getElementById("answer").innerHTML = "Try again."
  }
}
