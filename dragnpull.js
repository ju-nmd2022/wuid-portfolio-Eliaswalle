// const fill = document.querySelector(".fill");
// const empties = document.querySelectorAll(".empty");

// let keysaved;

// function saveToSessionStorage() {
//   sessionStorage.keysaved = keysaved;
// }

// function readFromSessionStorage() {
//   keysaved = sessionStorage.keysaved === "true";
// }

// window.addEventListener("load", function () {
//   readFromSessionStorage();

//   if (keysaved === "true") {
//   }
// });

// //fill listeners

// fill.addEventListener("dragstart", dragStart);
// fill.addEventListener("dragend", dragEnd);

// //loop through empties and call drag events

// for (const empty of empties) {
//   empty.addEventListener("dragover", dragOver);
//   empty.addEventListener("dragenter", dragEnter);
//   empty.addEventListener("dragleave", dragLeave);
//   empty.addEventListener("drop", dragDrop);
// }

// //drag functions

// function dragStart() {
//   this.className += " hold";
//   setTimeout(() => (this.className = "invisible"), 0);
// }
// function dragEnd() {
//   this.className = "fill";

//   keysaved = true;
//   saveToSessionStorage();
// }
// function dragOver(e) {
//   e.preventDefault();
// }
// function dragEnter(e) {
//   e.preventDefault();
//   this.className += " hovered";
// }
// function dragLeave() {
//   this.className = "empty";
// }
// function dragDrop() {
//   this.className = "empty";
//   this.append(fill);
// }
