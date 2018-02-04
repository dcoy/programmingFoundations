console.log('Loading scripts...');

const finalGrades = ["A", "B", "C", "D", "F"];

let allGrades = document.getElementById("all-grades");
let averageGrades = document.getElementById("average-grade");
let fGrade = document.getElementById("letter-grade");
let inputGrade = document.getElementById("grade");
let none = document.getElementById("main-grade-box");

function calcGrades(allGrades) {

  let totalGrade = 0;
  let avgGrade = 0;
  let finalGrade;

  for (let i = 0; i < allGrades.length; i++) {
    totalGrade += parseInt(allGrades[i]);
    avgGrade = totalGrade / allGrades.length;
  }

  if (avgGrade >= 90) {
    finalGrade = finalGrades[0];
    fGrade.className = "grade-color-green";
  } else if (avgGrade >= 80) {
    finalGrade = finalGrades[1];
    fGrade.className = "grade-color-blue";
  } else if (avgGrade >= 75) {
    finalGrade = finalGrades[2];
    fGrade.className = "grade-color-yellow";
  } else if (avgGrade >= 70) {
    finalGrade = finalGrades[3];
    fGrade.className = "grade-color-orange";
  } else {
    finalGrade = finalGrades[4];
    fGrade.className = "grade-color-red";
  }

  outputData(allGrades, avgGrade, finalGrade);
}

function parseGrade(input) {
  let grades = input.split(",");
  grades = grades.sort((a, b) => {return b-a});
  calcGrades(grades);
}

function submit() {

  if (inputGrade.value === '') {
    none.innerHTML = "Try entering a grade next time!";
  } else if (inputGrade.value < 0 || inputGrade.value > 100) {
    none.innerHTML = "Your grade must be 0-100!";
    none.className = "grade-color-yellow";
  } else {
    parseGrade(inputGrade.value);
  }
}

function outputData(grade, average, final) {
  allGrades.innerHTML = grade;
  averageGrades.innerHTML = average.toFixed(1);
  fGrade.innerHTML = final;
}
