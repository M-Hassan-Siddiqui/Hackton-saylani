
import { getDatabase, ref as ref_database, child, get, update, remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
const db = getDatabase();


let classtimings = document.querySelector("#classtimings");
let scheduleOfClasses = document.querySelector("#scheduleOfClasses");
let teachersName = document.querySelector("#teachersName");
let sectionName = document.querySelector("#sectionName");
let courseName = document.querySelector("#courseName");
let batchNumber = document.querySelector("#batchNumber")
//class methods

let selectClassbtn = document.querySelector("#selectClass");
let updateClassbtn = document.querySelector("#updateClass");
let deleteClassbtn = document.querySelector("#deleteClass")


selectClassbtn.addEventListener("click", selectClassfunc);
updateClassbtn.addEventListener("click", updateClassfunc);
deleteClassbtn.addEventListener("click", deleteClassfunc)


async function selectClassfunc() {

    const dbRef = ref_database(getDatabase());
    get(child(dbRef, `Classes/${courseName.value}`)).then((snapshot) => {
      if (snapshot.exists()) {
        alert("data found")
        classtimings.value = snapshot.val().classtimings;
        scheduleOfClasses.value = snapshot.val().scheduleOfClasses;
        teachersName.value = snapshot.val().teachersName;
        sectionName.value = snapshot.val().sectionName;
        courseName.value = snapshot.val().courseName;
        batchNumber.value = snapshot.val().batchNumber;
      } else {
        classtimings.value = "";
        scheduleOfClasses .value = "";
        teachersName .value = "";
        sectionName .value = "";
        courseName .value = "";
        batchNumber .value = "";
        alert("data  found")
      }
    }).catch((error) => {
      console.error(error);
      
      alert("data not found")
    })
  
  }
  
  async function updateClassfunc() {
    try {
      update(ref_database(db, `Classes/${courseName.value}`), {
        classtimings: classtimings.value,
        scheduleOfClasses: scheduleOfClasses.value,
        teachersName: teachersName.value,
        sectionName: sectionName.value,
        courseName: courseName.value,
        batchNumber: batchNumber.value
      });
      alert("class updated")
    }
    catch (e) {
      console.error(e);
      alert("class not updated")
      classtimings.value = "";
      scheduleOfClasses .value = "";
      teachersName .value = "";
      sectionName .value = "";
      courseName .value = "";
      batchNumber .value = "";
    }
  }
  
  async function deleteClassfunc() {
    try {
      remove(ref_database(db, `Classes/${courseName.value}`), {
        classtimings: classtimings.value,
        scheduleOfClasses: scheduleOfClasses.value,
        teachersName: teachersName.value,
        sectionName: sectionName.value,
        courseName: courseName.value,
        batchNumber: batchNumber.value
      });
      classtimings.value = "";
      scheduleOfClasses .value = "";
      teachersName .value = "";
      sectionName .value = "";
      courseName .value = "";
      batchNumber .value = "";
      alert("class deleted")
    }
    catch (e) {
      alert("class not deleted")
      console.error(e);
    }
  }


  const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
// async function check() {
//   const dbRef = ref_database(getDatabase());
//   get(child(dbRef, `Students/`)).then((snapshot) => {
//     if (snapshot.exists()) {

//       let stu = snapshot.val();
//       let stua = Object.keys(stu);
//       for (let i = 0; i < stua.length; i++) {
//         get(child(dbRef, `Students/${stua[i]}`)).then((snapshot) => {
//           if (snapshot.exists()) {
//             let name = snapshot.val().studentrollNumber;
//             console.log(name)
            

//               get(child(dbRef, `StudentsPresent/${name} ${date}`)).then((snapshot) => {
//                 if (snapshot.exists()) {
//                   let kname = snapshot.val().studentrollNumber;                 
//                   console.log(kname)
                
//                 } else {
//                 }
               
//               }).catch((error) => {
//                 console.error(error);
//               })


//           } else {
//           }
//         }).catch((error) => {
//           console.error(error);
//         })
//       }
//     } else {
//     }
//   }).catch((error) => {
//     console.error(error);
//   })
  
// }
// check()

