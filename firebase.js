const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "gays-triv.firebaseapp.com",
projectId: "gays-triv"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();