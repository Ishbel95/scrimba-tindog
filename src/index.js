import dogs from "/src/data.js";
import dog from "/src/dog.js";

function render() {
  console.log("hello");
  document.getElementById("dog").innerHTML = newDog.getDogHtml();
}

const newDog = new dog(dogs[0]);
render();
