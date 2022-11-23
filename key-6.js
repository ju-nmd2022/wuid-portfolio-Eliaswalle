const screw = document.getElementById("screwid");
let screwCollected;

screw.addEventListener("click", () => {
  const screwitemid = document.getElementById("screwitemid");
  screwitemid.style.visibility = "visible";
  screw.style.visibility = "hidden";
  alert("Oh a key, this could help you open the red door!");
  screwCollected = true;
  saveToSessionStorage();
});

function saveToSessionStorage() {
  sessionStorage.screwCollected = screwCollected;
}

function readFromSessionStorage() {
  screwCollected = sessionStorage.screwCollected === "true";
}

window.addEventListener("load", function () {
  readFromSessionStorage();

  if (screwCollected === true) {
    screwitemid.style.visibility = "visible";
    screw.style.visibility = "hidden";
  }
});
