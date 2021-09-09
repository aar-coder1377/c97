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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
   
      //End code
      });});}
getData();
function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";


}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = index.html;

}
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0

    });
    document.getElementById("msg").value = "";
}
