
import { ref as ref_storage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getDatabase, ref as ref_database , set} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


import { storage } from "./firebaseconfig.js";
const db = getDatabase();

let studentname = document.querySelector("#studentname");
let studentfatherName = document.querySelector("#studentfatherName");
let studentrollNumber = document.querySelector("#studentrollNumber");
let studentcontactNumber = document.querySelector("#studentcontactNumber");
let studentcnicNumber = document.querySelector("#studentcnicNumber");
let studentpicture = document.querySelector("#studentpicture");
let studentCourseName = document.querySelector("#studentCourseName");
let StudentClass = document.querySelector("#StudentClass");
let Studentimg = document.querySelector("#studentimage");

//students methods
let addStudentbtn = document.querySelector("#addStudentbtn");
addStudentbtn.addEventListener("click", addStudentfunc);
//student functions
async function addStudentfunc() {
  let file = studentpicture.files[0];
  let imageRef = ref_storage(storage, `studentProfilepic/${file.name}`);
  try {
    let uploaded = await uploadBytes(imageRef, file);
    let url = await getDownloadURL(imageRef);
    console.log(url, 'downloadable URL');
    set(ref_database(db, `Students/` + studentrollNumber.value), {
      studentname: studentname.value,
      studentfatherName: studentfatherName.value,
      studentrollNumber: studentrollNumber.value,
      studentcontactNumber: studentcontactNumber.value,
      studentcnicNumber: studentcnicNumber.value,
      studentpicture: url,
      studentCourseName: studentCourseName.value,
      StudentClass: StudentClass.value
    });
    alert("data uploded") 
    studentname.value = "";
    studentfatherName.value = "";
    studentrollNumber.value = "";
    studentcontactNumber.value = "";
    studentcnicNumber.value = "";
    studentpicture.name = "";
    Studentimgbg.style.backgroundImage = "url(https://icon-library.com/images/icon-gallery-android/icon-gallery-android-18.jpg)";
    studentCourseName.value = "";
    StudentClass.value = "";
  }
  catch (e) {
    console.error(e);
    alert("data not uploded")
  }
}


