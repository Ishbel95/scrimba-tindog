

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="A dog profile app that allows you to like or dislike the cute doggos!"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://use.typekit.net/esj4tsh.css" />
    <link rel="stylesheet" href="/src/styles.css" />
    <title>Tindog - coded by Ishbel Fahey-Theaker- Frontend Developer</title>
  </head>
  <body>
    <div class="app">
      <header>
        <div class="container container-icon-header">
          <div class="header-profile-icon">
            <img
              src="/images/icon-profile.png"
              class="header-icon"
              alt="head and shoulders icon"
            />
          </div>
          <div class="header-logo">
            <img
              src="/images/logo.png"
              class="header-logo"
              alt="white paw print on red background"
            />
          </div>
          <div class="header-chat-icon">
            <img
              src="/images/icon-chat.png"
              class="header-icon"
              alt="speechbubble icon"
            />
          </div>
        </div>
      </header>
      <main><div class="container container-main" id="dog"></div></main>
      <footer>
        <div class="container container-icon-footer">
          <div class="footer-icon-cross">
            <img src="/images/icon-cross.png" alt="red x symbol" id="cross" />
          </div>
          <div class="footer-icon-like">
            <img
              src="/images/icon-heart.png"
              alt="green heart symbol"
              id="like"
            />
          </div>
        </div>
      </footer>
    </div>
    <script src="/data.js" type="module"></script>
    <script src="/index.js" type="module"></script>
    <script src="/DogConstructor.js" type="module"></script>
  </body>
</html>
