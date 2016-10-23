var config = {
  apiKey: "",
  authDomain: "dayshare-9e38a.firebaseapp.com",
  databaseURL: "https://dayshare-9e38a.firebaseio.com"
};
firebase.initializeApp(config);

function login() {
  // Log the user in via Twitter
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(function(error) {
    console.log("Error authenticating user:", error);
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  // Once authenticated, instantiate Firechat with the logged in user
  if (user) {
    initChat(user);
  }
});

function initChat(user) {
  // Get a Firebase Database ref
  var chatRef = firebase.database().ref("chat");

  // Create a Firechat instance
  var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

  // Set the Firechat user
  chat.setUser(user.uid, user.displayName);
}
