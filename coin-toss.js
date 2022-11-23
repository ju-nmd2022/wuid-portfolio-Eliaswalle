//Coin Flip using math.
function coin_toss() {
  var image = new Array("heads.png", "tails.png");
  var show_random_image = Math.floor(Math.random() * image.length);
  document.getElementById("coin_flip").src = image[show_random_image];
  if (show_random_image === 1) {
    alert("Try one more time!");
  } else if (show_random_image === 0) {
    alert("Well done you can go to the END!");
  }
}




