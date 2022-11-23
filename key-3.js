const screw2 = document.getElementById("screwid2");
let screw2Collected;

screw2.addEventListener("click", () => {
  const screwitemid2 = document.getElementById("screwitemid2");
  screwitemid2.style.visibility = "visible";
  screw2.style.visibility = "hidden";
  alert("Oh a key, this could help you open the red door!");
  screw2Collected = true;
  saveToSessionStorage();
});

function saveToSessionStorage() {
  sessionStorage.screw2Collected = screw2Collected;
}

function readFromSessionStorage() {
  screw2Collected = sessionStorage.screw2Collected === "true";
}

window.addEventListener("load", function () {
  readFromSessionStorage();

  if (screw2Collected === true) {
    screwitemid2.style.visibility = "visible";
    screw2.style.visibility = "hidden";
  }
});
