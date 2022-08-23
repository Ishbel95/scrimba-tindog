class dogProfile {
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

export default dogProfile;
