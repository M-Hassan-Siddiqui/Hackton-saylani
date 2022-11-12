import { ref as ref_storage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getDatabase, ref as ref_database, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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
let Studentimgbg = document.querySelector(".studentimage");

//students methods

let selectStudentbtn = document.querySelector("#selectStudentbtn");
let updateStudentbtn = document.querySelector("#updateStudentbtn");
let deleteStudentbtn = document.querySelector("#deleteStudentbtn")
//student functions
selectStudentbtn.addEventListener("click", selectStudentfunc);
updateStudentbtn.addEventListener("click", updateStudentfunc);
deleteStudentbtn.addEventListener("click", deleteStudentfunc);


async function selectStudentfunc() {
  const dbRef = ref_database(getDatabase());
  get(child(dbRef, `Students/` + studentrollNumber.value)).then((snapshot) => {
    if (snapshot.exists()) {
      alert("student found")
      studentname.value = snapshot.val().studentname;
      studentfatherName.value = snapshot.val().studentfatherName;
      studentrollNumber.value = snapshot.val().studentrollNumber;
      studentcontactNumber.value = snapshot.val().studentcontactNumber;
      studentcnicNumber.value = snapshot.val().studentcnicNumber;
      Studentimgbg.style.backgroundImage = `url('${snapshot.val().studentpicture}')`;
      studentCourseName.value = snapshot.val().studentCourseName;
      StudentClass.value = snapshot.val().StudentClass;
    } else {
      alert("student not found")
    }
  }).catch((error) => {
    console.error(error);
    
  })
}

async function updateStudentfunc() {
  let bgimg = studentpicture.value;
  if(bgimg == ""){
    var file = Studentimgbg.style.backgroundImage.slice(4, -1).replace(/"/g, "");
  }else{
    var file = studentpicture.files[0];
    var imageRef = ref_storage(storage, `studentProfilepic/${file.name}`);
  }
  try {
    if(bgimg == ""){
      var url = file;
      console.log(url);
    }else{
      var uploaded = await uploadBytes(imageRef, file);
      var url = await getDownloadURL(imageRef);
      console.log(url, 'downloadable URL');
    }
    update(ref_database(db, `Students/` + studentrollNumber.value), {
      studentname: studentname.value,
      studentfatherName: studentfatherName.value,
      studentrollNumber: studentrollNumber.value,
      studentcontactNumber: studentcontactNumber.value,
      studentcnicNumber: studentcnicNumber.value,
      studentpicture: url,
      studentCourseName: studentCourseName.value,
      StudentClass: StudentClass.value
    });
    console.log("data updated")
    alert("student updated")
  }
  catch (e) {
    console.error(e);
    alert("student not updated")
  }
}

async function deleteStudentfunc() {
  try {
    remove(ref_database(db, `Students/` + studentrollNumber.value), {
      studentname: studentname.value,
      studentfatherName: studentfatherName.value,
      studentrollNumber: studentrollNumber.value,
      studentcontactNumber: studentcontactNumber.value,
      studentcnicNumber: studentcnicNumber.value,
      studentpicture: Studentimgbg.style.backgroundImage.slice(4, -1).replace(/"/g, ""),
      studentCourseName: studentCourseName.value,
      StudentClass: StudentClass.value
    });
    console.log("data removed")
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
    alert("data not removed")
  }
}

