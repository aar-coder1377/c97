//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCA9tQRHWiYlG3VJeTOhhlbZSINP67aK5U",
    authDomain: "kwitterappc97.firebaseapp.com",
    projectId: "kwitterappc97",
    storageBucket: "kwitterappc97.appspot.com",
    messagingSenderId: "90271183617",
    appId: "1:90271183617:web:a8e88a247559e427baa100",
    measurementId: "G-XLN76S0V7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class="user_tick" src="tick.png"></h4>";
    message_with_tag = "<h4 class="message_h4">" + message + "</h4>";
    like_button = "<button class="btn btn - warning" id=" + firebase_message_id + " value=" + like + "onclick="updateLike(this.id)">";
    span_with_tag = "<span  class='glyphicon glyphicon-thumbs-up'>like:" + like + "</span> </button> <hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = index.html;

}
function updateLike(message_id) {
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({
        like: update_likes


    });
    

}