import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthencation = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthencation;