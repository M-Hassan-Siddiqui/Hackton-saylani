
import { getDatabase, ref as ref_database, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
const db = getDatabase();

let classtimings = document.querySelector("#classtimings");
let scheduleOfClasses = document.querySelector("#scheduleOfClasses");
let teachersName = document.querySelector("#teachersName");
let sectionName = document.querySelector("#sectionName");
let courseName = document.querySelector("#courseName");
let batchNumber = document.querySelector("#batchNumber")
//class methods
let addClassbtn = document.querySelector("#addClass");


addClassbtn.addEventListener("click", addClassfunc);


async function addClassfunc() {
  try {
    set(ref_database(db, `Classes/` + courseName.value), {
      classtimings: classtimings.value,
      scheduleOfClasses: scheduleOfClasses.value,
      teachersName: teachersName.value,
      sectionName: sectionName.value,
      courseName: courseName.value,
      batchNumber: batchNumber.value
    });
    alert("data  uploded")
    classtimings.value = "";
        scheduleOfClasses .value = "";
        teachersName .value = "";
        sectionName .value = "";
        courseName .value = "";
        batchNumber .value = "";
  }
  catch (e) {
    console.error(e);
    alert("data not uploded")
    classtimings.value = "";
        scheduleOfClasses .value = "";
        teachersName .value = "";
        sectionName .value = "";
        courseName .value = "";
        batchNumber .value = "";
  }
}
