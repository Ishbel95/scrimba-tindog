import dogs from "/data.js";
import Dog from "/DogConstructor.js";
const dogArray = [0, 1, 2];
let newDog = getNewDog();
let isWaiting = false;

function getNewDog() {
  const nextDogData = dogs[dogArray.shift()];
  return nextDogData ? new Dog(nextDogData) : {};
}
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
function badgeRender() {
  render();
  setTimeout(() => {
    getNextDogProfile();
    isWaiting = false;
  }, 2000);
}

document.getElementById("like").addEventListener("click", () => {
  if (!isWaiting) {
    newDog.hasBeenLiked = true;
    newDog.hasBeenSwiped = false;
    isWaiting = true;
    badgeRender();
  }
});
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
