import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_62Ubns6YuVb6QDTsiAYkuL-VODiN5sk",
  authDomain: "nick-1b215.firebaseapp.com",
  projectId: "nick-1b215",
  storageBucket: "nick-1b215.appspot.com",
  messagingSenderId: "854698450976",
  appId: "1:854698450976:web:ff2be2ba41576f49475c45",
  measurementId: "G-DRD9B8R9GT",
};
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector(".google-btn")?.addEventListener("click", signGoogle);
const loginBtn = document.querySelector(".login-btn");
const small = document.querySelector(".login-btn-small");
const profile = document.querySelector(".profile");
function signGoogle() {
  signInWithPopup(auth, provider).catch((error) => {
    alert("Something went wrong please try again");
  });
}
(function () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (window.location.pathname == "/pages/login/")
        window.location.replace("/pages/mentees");
      loginBtn?.classList.add("lg:hidden");
      small?.classList.add("hidden");
      profile?.setAttribute("src", user.photoURL);
      profile?.classList.add("flex");
    } else {
      loginBtn?.classList.add("lg:inline-block");
      small?.classList.add("block");
      profile?.classList.add("hidden");
      return null;
    }
  });
})();
