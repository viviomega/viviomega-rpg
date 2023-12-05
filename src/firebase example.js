import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
const firebase = initializeApp(firebaseConfig);
const isEmulating = window.location.hostname === "localhost";
if (isEmulating) {
  const auth = getAuth();
  connectAuthEmulator(auth, "http://localhost:9099");

  const storage = getStorage();
  connectStorageEmulator(storage, "localhost", 9199);

  const db = getFirestore(firebase);
  connectFirestoreEmulator(db, "localhost", 8080);

  const functions = getFunctions(firebase);
  connectFunctionsEmulator(functions, "localhost", 5001);
}

export const firebaseApp = () => {
  return firebase;
};

export default firebase;
