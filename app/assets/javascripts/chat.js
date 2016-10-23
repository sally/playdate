$(document).ready(function() {
  $("#addClass").click(function () {
    login();
    $('#qnimate').addClass('popup-box-on');
  });

  $("#removeClass").click(function () {
    $('#qnimate').removeClass('popup-box-on');
  });
});

// configure and initialize firebase
var config = {
  apiKey: "AIzaSyDw6D_RWJbfJsWuxCyf_8tbvt4fUAZhZhI",
  authDomain: "dayshare-9e38a.firebaseapp.com",
  databaseURL: "https://dayshare-9e38a.firebaseio.com"
};
firebase.initializeApp(config);

// login user via google
function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(function(error) {
    console.log("Error authenticating user:", error);
  });
}

// new firechat instance on successful user auth
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    initChat(user);
  }
});
function initChat(user) {
  // get a firebase database ref
  var chatRef = firebase.database().ref("chat");

  // create a firechat instance
  var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

  // set the firechat user
  chat.setUser(user.uid, user.displayName);
}
