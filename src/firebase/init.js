import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiksT1kD6onNnYzceY1rSVI0fweOigX3s",
  authDomain: "prueba-crud-2023.firebaseapp.com",
  projectId: "prueba-crud-2023",
  storageBucket: "prueba-crud-2023.appspot.com",
  messagingSenderId: "279176065181",
  appId: "1:279176065181:web:d742c396f785b14c686474"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db