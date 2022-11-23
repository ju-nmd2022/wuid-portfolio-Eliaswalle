const screw5 = document.getElementById("screwid5");
let screw5Collected;

screw5.addEventListener("click", () => {
  const screwitemid5 = document.getElementById("screwitemid5");
  screwitemid5.style.visibility = "visible";
  screw5.style.visibility = "hidden";
  alert("Oh a key, this could help you open the red door!");
  screw5Collected = true;
  saveToSessionStorage();
});

function saveToSessionStorage() {
  sessionStorage.screw5Collected = screw5Collected;
}

function readFromSessionStorage() {
  screw5Collected = sessionStorage.screw5Collected === "true";
}

window.addEventListener("load", function () {
  readFromSessionStorage();

  if (screw5Collected === true) {
    screwitemid5.style.visibility = "visible";
    screw5.style.visibility = "hidden";
  }
});
