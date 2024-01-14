
var semi = semi || {};

semi.main = function () {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
        } else {
        }
    });

    document.querySelector("#accountAuth").onclick = (event) => {

        const inputEmail = document.querySelector("#emailInput");
        const inputPassword = document.querySelector("#passwordInput");
        firebase.auth().createUserWithEmailAndPassword(inputEmail.value, inputPassword.value)
            .then((userCredential) => {
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    };

    // document.querySelector("#loginAuth").onclick = (event) =>  {
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then((userCredential) => {
    //             var user = userCredential.user;
    //         })
    //         .catch((error) => {
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             console.log(errorMessage, errorCode);
    //         });
    // }

}

semi.startFirebaseStorage = function () {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAqZXnFu72l1qnme9N7TnmbMsZKlbZxLtY",
        authDomain: "semiconductor-hub-ce0cd.firebaseapp.com",
        databaseURL: "https://semiconductor-hub-ce0cd-default-rtdb.firebaseio.com",
        projectId: "semiconductor-hub-ce0cd",
        storageBucket: "semiconductor-hub-ce0cd.appspot.com",
        messagingSenderId: "633395400763",
        appId: "1:633395400763:web:33e21995843d3b21fdcc1e",
        measurementId: "G-JGFZPNLNJV"
    };
    console.log("Started firebase storage");
    firebase.analytics();
}

semi.main();