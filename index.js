import dogs from "/data.js";
import Dog from "/Dog.js";
const dogArray = [0, 1, 2];
let hasBeenSwiped = false;
let hasBeenLiked = false;
let isWaiting = false;

function getNewDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}

function nextDogProfile() {
  if (dogArray.length > 0) {
    newDog = getNewDog();
    render();
  } else {
    document.getElementById("dog").innerHTML = `<p>No more dogs</p>`;
  }
}

function render() {
  document.getElementById("dog").innerHTML = newDog.getDogHtml();
}

document.getElementById("like").addEventListener("click", () => {
  console.log("hello");
  hasBeenLiked = true;
  hasBeenSwiped = false;
  nextDogProfile();
});
document.getElementById("cross").addEventListener("click", () => {
  console.log("hello");
  hasBeenLiked = false;
  hasBeenSwiped = true;
  nextDogProfile();
});

let newDog = getNewDog();
render();

// newDog.getDogHtml();
