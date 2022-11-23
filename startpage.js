// //function newStuff() {
//   var storedInput = document.form.sum.value;
//   if (storedInput === "") {
//     alert("what are you doing Write YOUR NAME");
//   } else storedInput === "Garrit";
//   {
//     alert("Hello");
//   }
// }

let textbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click", function () {
  var text = textbox.value;
  if (text.length == 0) {
    alert("You need to find all the keys to move forward!");
  } else if (text === "keys") {
    alert(
      "WOW, You found all the keys now you are welcome to open the red door!"
    );
  }
});
