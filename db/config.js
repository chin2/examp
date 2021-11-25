// import firebase from "firebase"
// const firebaseConfig = {
//     apiKey: "AIzaSyBubHuI84JhQijYbJK2RsJt_B3XHE1BlC8",
//     authDomain: "assess-c776f.firebaseapp.com",
//     projectId: "assess-c776f",
//     storageBucket: "assess-c776f.appspot.com",
//     messagingSenderId: "209411526720",
//     appId: "1:209411526720:web:345ec7763420e6a4c78fa5",
//     measurementId: "G-3DGLHL6MRC"
// }
// const app = firebase.initializeApp(firebaseConfig)
// const db = app.firestore()
// const getData = async () => {
//     let data = await db.collection("users").get();
//     data.forEach((e) => {
//         console.log(`${e.id}-->> ${JSON.stringify(e.data())}`)
//     })
// }
// const pushData = async () => {
//     let data = await db.collection("users/").add({
//         "id": 1,
//         "d": 1
//     });

// }
// pushData();
// getData()

// export default db