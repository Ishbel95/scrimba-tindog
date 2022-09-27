import dogs from "/data.js";
import Dog from "/DogConstructor.js";
const dogArray = [0, 1, 2];
let newDog = getNewDog();
let isWaiting = false;

// remove dog from beginning of array (create next dog data)
// get new instance of dog using the next dog data
function getNewDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}
// if there are more dogs in dogs array, render, if not, render refresh button and reload page
function getNextDogProfile() {
  if (dogArray.length > 0) {
    newDog = getNewDog();
    isWaiting = false;
    render();
  } else {
    document.getElementById(
      "dog"
    ).innerHTML = `<button id="btn-refresh">Refresh</button>`;
  }
  document.getElementById("btn-refresh").addEventListener("click", () => {
    location.reload(true);
  });
}
// render badge and dog profile and wait to render the next dog profile so badge has time to render
function badgeRender() {
  render();
  setTimeout(() => {
    getNextDogProfile();
    isWaiting = false;
  }, 2000);
}

// like event, set isWaiting is true

document.getElementById("like").addEventListener("click", () => {
  if (!isWaiting) {
    newDog.hasBeenLiked = true;
    newDog.hasBeenSwiped = false;
    isWaiting = true;
    badgeRender();
  }
});

// dislike event
document.getElementById("cross").addEventListener("click", () => {
  if (!isWaiting) {
    newDog.hasBeenSwiped = true;
    newDog.hasBeenLiked = false;
    isWaiting = true;
    badgeRender();
  }
});

function render() {
  document.getElementById("dog").innerHTML = newDog.getDogHtml();
}

render();
