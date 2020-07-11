<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <script
      src="https://kit.fontawesome.com/74176d5c0d.js"
      crossorigin="anonymous"
    ></script>

    <link rel="stylesheet" href="/src/css/style_two.css" />

    <title>Travel Tracker</title>
  </head>
  <body>
    <div id="site-container">
      <div id="header-section">
        <h1>Travel Tracker <i class="fas fa-passport"></i></h1>
      </div>
      <div id="main-section">
        <form id="login-form">
          <label id="signin" for="signin">Sign In</label><br />
          <div id="username">
            <label id="label-username" for="username">Username:</label><br />
            <input
              id="input-username"
              type="text"
              placeholder="Please enter your username"
            /><br />
          </div>
          <div id="password">
            <label id="label-password" for="password">Password:</label><br />
            <input
              id="input-password"
              type="text"
              placeholder="Please enter your password"
            /><br />
          </div>
          <button type="button" onclick="authPW()" id="submit">SUBMIT</button>
        </form>
      </div>

      <footer id="footer">
        <h3>Travel Tracker LLC 2020</h3>
      </footer>
    </div>
    <script src="/src/index.js"></script>
  </body>
</html>