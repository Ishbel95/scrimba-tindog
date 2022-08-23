import dogs from "/src/data.js";
import dogProfile from "/src/dog.js";
const dogArray = ["rex", "bella", "teddy"];
let hasBeenSwiped = false;
let hasBeenLiked = false;

function getNewDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new dogProfile(nextDogData) : {};
}

function render() {
  document.getElementById("dog").innerHTML = newDog.getDogHtml();
}

document.getElementById("like").addEventListener("click", function () {
  console.log("hello");
  hasBeenLiked = true;
  hasBeenSwiped = false;
  if (hasBeenLiked) {
    newDog = getNewDog();
  }
});

let newDog = new dogProfile(dogs[0]);

render();

// newDog.getDogHtml();
