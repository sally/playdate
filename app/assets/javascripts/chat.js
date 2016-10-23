$(document).ready(function() {
  $("#chat-btn").on ("click", function(e) {
    e.preventDefault();
    login();
    if ($("#firechat-wrapper").hasClass("closed")) {
      $("#firechat-wrapper").removeClass("closed");
      $(".popup").css( "right", "20px" );
      $("#firechat-btn-rooms").css('display', 'none');
      $(".firechat-dropdown-toggle").css('display', 'none');
      $(".clearfix label").css('display', 'none');
      $(".chat").css('border-left', '0').css('border-right', '0');
    } else {
      $("#firechat-wrapper").addClass("closed");
      $(".popup").css( "right", "-380px" );
    }
  })
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
