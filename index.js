import dogs from "/data.js";
import Dog from "/Dog.js";
const dogArray = ["rex", "bella", "teddy"];
let hasBeenSwiped = false;
let hasBeenLiked = false;
// let isWaiting = false;

function getNewDog(data) {
  const nextDogData = data[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
  document.getElementById("dog").innerHTML = newDog.getDogHtml();
}
document.getElementById("like").addEventListener("click", () => {
  console.log("hello");
  hasBeenLiked = true;
  hasBeenSwiped = false;
});

let newDog = new Dog(getNewDog(dogs));
render();

// newDog.getDogHtml();
