// constructor for all dog profiles

class Dog {
  constructor(data) {
    // assign the data to this keyword
    Object.assign(this, data);
  }
  // conditional rendering of badges
  setBadge() {
    if (this.hasBeenLiked) {
      return `<img src="/images/badge-like.png" alt="green like badge" class="badge"/>`;
    } else if (this.hasBeenSwiped) {
      return `<img src="/images/badge-nope.png" alt="red like badge" class="badge"/>`;
    } else {
      return ``;
    }
  }
  getDogHtml() {
    // dog data object destructering and dog profile render
    const { name, avatar, age, bio } = this;
    const badge = this.setBadge();
    return `
      ${badge}
      <img src="/${avatar}" alt="dog looking at camera" />
      <div class="dog-info">
          <p class="dog-info-title">${name}, ${age}</p>
          <p class="dog-info-caption">${bio}</p>
      </div>
      `;
  }
}

export default Dog;
