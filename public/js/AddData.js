var firebaseConfig = {
    apiKey: "AIzaSyC1HXFeO9jqXXbiFC86LPDpRsL-VMZw1WY",
    authDomain: "portfolio-27f5a.firebaseapp.com",
    projectId: "portfolio-27f5a",
    storageBucket: "portfolio-27f5a.appspot.com",
    messagingSenderId: "848601920962",
    appId: "1:848601920962:web:536c5aeab3a153190f125b",
    measurementId: "G-7TX01K8420"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

function addData() {
    db.collection("responses").add({ 
            first_name: $('#grid-first-name').val(),
            last_name: $('#grid-last-name').val(),
            email: $('#email').val(),
            message: $('#message').val()

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}