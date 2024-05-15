import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUKBAFbwMqXSAsOygkHav6rIulozSSK-M",
  authDomain: "webcarros-8d126.firebaseapp.com",
  projectId: "webcarros-8d126",
  storageBucket: "webcarros-8d126.appspot.com",
  messagingSenderId: "205911724882",
  appId: "1:205911724882:web:e7f821f53d3cb7b32e608b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
