import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzTQhZxMVCjuC6FYIwzda0B91by1wewE8",
  authDomain: "netflix-app-42d75.firebaseapp.com",
  projectId: "netflix-app-42d75",
  storageBucket: "netflix-app-42d75.appspot.com",
  messagingSenderId: "844300031213",
  appId: "1:844300031213:web:b84d9237dec73770f428e4",
  measurementId: "G-1S9CTHXP0D",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
