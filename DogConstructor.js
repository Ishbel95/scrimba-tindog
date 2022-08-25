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
          <p class="dog-info-title">${name}, ${age}</p>
          <p class="dog-info-caption">${bio}</p>
      </div>
      `;
  }
}

export default Dog;
