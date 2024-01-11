
var semi = semi || {};

semi.main = function () {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            // ...
        } else {
            //...
        }
    });

    document.querySelector("#accountAuth").onclick = (event) => {

        const inputEmail = document.querySelector("#emailInput");
        const inputPassword = document.querySelector("#passwordInput");
        firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
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
        apiKey: "AIzaSyBokIKE2PrknSV64p-jChLFL9fd009nLfI",
        authDomain: "semiconductor-hub.firebaseapp.com",
        projectId: "semiconductor-hub",
        storageBucket: "semiconductor-hub.appspot.com",
        messagingSenderId: "464569721118",
        appId: "1:464569721118:web:ee578eaff377245121290f",
        measurementId: "G-QZ71JRQBR5"
    };
    console.log("Started firebase storage");
    firebase.analytics();
}

semi.main();