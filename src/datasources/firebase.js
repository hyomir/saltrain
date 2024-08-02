
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 추가



const firebaseConfig = {
  apiKey: "AIzaSyCQk_0GzZliPkQcGNh6DVSVNWqpaiP-Vpg",
  authDomain: "saltrain-f6cca.firebaseapp.com",
  projectId: "saltrain-f6cca",
  storageBucket: "saltrain-f6cca.appspot.com",
  messagingSenderId: "621915263313",
  appId: "1:621915263313:web:b002bb2c841bab37544370"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 추가

export default db; // 추가