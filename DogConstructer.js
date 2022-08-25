class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  setBadge() {
    if (this.hasBeenLiked) {
      return `<img src="/images/badge-like.png" alt="like" class="badge"/>`;
    } else if (this.hasBeenSwiped) {
      return `<img src="/images/badge-nope.png" alt="nope" class="badge"/>`;
    } else {
      return ``;
    }
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    const badge = this.setBadge();
    return `
      ${badge}
      <img src="/${avatar}" alt="dog looking at camera" />
      <div class="dog-info">
          <p>${name}, ${age}</p>
          <p>${bio}</p>
      </div>
      `;
  }
}

export default Dog;
