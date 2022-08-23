import dogs from "/src/data.js";

class dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
    <img src="/${avatar}" alt="dog looking at camera" />
    <div class = "dog-info">
        <p>${name}, ${age}</p>
        <p>${bio}</p>
    </div>
    `;
  }
}

function render() {
  console.log("hello");
  document.getElementById("dog").innerHTML = newDog.getDogHtml();
}

const newDog = new dog(dogs[0]);
render();
