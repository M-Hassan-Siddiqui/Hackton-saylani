


import { signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let btnlog = document.querySelector("#loginBtn");
btnlog.addEventListener("click", login);



async function login() {
    let modifiedemail = email.value+"@admin.com"
    console.log(modifiedemail)
    try {
        let { user } = await signInWithEmailAndPassword(auth, modifiedemail, pass.value);
        console.log(user);
        window.location.replace('index.html')
        alert("USER FOUND successfully login");
    }
    catch (e) {
        alert("NO USER FOUND");
        console.error(e.message);
        
    }
}

//end
