import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    
        apiKey: "AIzaSyC8SSE85rb8StLdS86Xg2uao-xm71x1Ni8",
        authDomain: "clone-bhanu.firebaseapp.com",
        databaseURL: "https://clone-bhanu.firebaseio.com",
        projectId: "clone-bhanu",
        storageBucket: "clone-bhanu.appspot.com",
        messagingSenderId: "103190047791",
        appId: "1:103190047791:web:fd8420f8fdcfcb1a37aada",
        measurementId: "G-KYZ3ZJL50J",
      
});

const db=firebaseApp.firestore();
const auth=firebase.auth();
 

export {db,auth};