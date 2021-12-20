import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.congif";

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default initializeFirebase;