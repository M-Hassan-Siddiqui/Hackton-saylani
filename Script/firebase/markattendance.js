import { getDatabase, ref as ref_database, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { storage } from "./firebaseconfig.js";
const db = getDatabase();

////attendance
let selectAttenCourse = document.querySelector("#selectAttenCourse");
//attendance methods
let selectAttenCoursebtn = document.querySelector("#selectAttenCoursebtn");
//selectAttenCoursebtn.addEventListener("click",);
async function displayCourses() {
  const dbRef = ref_database(getDatabase());
  get(child(dbRef, `Classes`)).then((snapshot) => {
    if (snapshot.exists()) {
      let courses = snapshot.val();
      let coursesArr = Object.keys(courses)
      for (let i = 0; i < coursesArr.length; i++) {
    console.log(coursesArr[i])
        selectAttenCourse.innerHTML = selectAttenCourse.innerHTML + `<tr><th scope="row">${i+1}</th><td>${coursesArr[i]}</td><td><input type="buttom" class="selectbtn" name="" id="selectcor" value="select" onclick="courseselected()"></td></tr>`;
      }
    } else {
    }
  }).catch((error) => {
    console.error(error);
  });
}
displayCourses()






let studentname = document.querySelector("#studentname");
let studentfatherName = document.querySelector("#studentfatherName");
let studentrollNumber = document.querySelector("#studentrollNumber");
let showstudentrollNumber = document.querySelector("#showstudentrollNumber");
let studentcontactNumber = document.querySelector("#studentcontactNumber");
let studentcnicNumber = document.querySelector("#studentcnicNumber");
let studentCourseName = document.querySelector("#studentCourseName");
let StudentClass = document.querySelector("#StudentClass");
let Studentimgbg = document.querySelector("#studentimage");
let selectStudentbtn = document.querySelector("#selectStudentbtn");


selectStudentbtn.addEventListener("click", selectStudentfunc);


async function selectStudentfunc() {
    const dbRef = ref_database(getDatabase());
    get(child(dbRef, `Students/` + studentrollNumber.value)).then((snapshot) => {
      if (snapshot.exists()) {
        studentname.innerHTML = snapshot.val().studentname;
        studentfatherName.innerHTML = snapshot.val().studentfatherName;
        showstudentrollNumber.innerHTML = snapshot.val().studentrollNumber;
        studentcontactNumber.innerHTML = snapshot.val().studentcontactNumber;
        studentcnicNumber.innerHTML = snapshot.val().studentcnicNumber;
        Studentimgbg.style.backgroundImage = `url('${snapshot.val().studentpicture}')`;
        studentCourseName.innerHTML = snapshot.val().studentCourseName;
        StudentClass.innerHTML = snapshot.val().StudentClass;
      } else {
      }
    }).catch((error) => {
      console.error(error);
    })
  }
  


//mark atted

  const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
///input attenance
let selectAtten = document.querySelector("#selectAtten");
let selectAttenbtn = document.querySelector("#selectAttenbtn");
selectAttenbtn.addEventListener("click", markattendance);
async function markattendance() {
  try {
    set(ref_database(db, `StudentsPresent/` + studentrollNumber.value + " " + currentDate), {
      studentname: studentname.innerHTML,
      studentfatherName: studentfatherName.innerHTML,
      studentrollNumber: showstudentrollNumber.innerHTML,
      studentcnicNumber: studentcnicNumber.innerHTML,
      studentCourseName: studentCourseName.innerHTML,
      StudentClass: StudentClass.innerHTML,
      Attendance: selectAtten.value
    });
    alert("present uploded");
  }
  catch (e) {
    alert("present not uploded")
    console.error(e);
  }
}