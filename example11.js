"use srict";
let studentName;
let english, marathi, chemistry, biology, math, physics;

studName = "Nikita";

english = 70;
marathi = 90;
chemistry = 80;
biology = 70;
math = 60;
physics = 35;

let markObtained = english + marathi + chemistry + biology + math + physics;
const totalMarks = 600;

let percentage = (markObtained / totalMarks) * 100;
//  let roundedOfPercentage= math.round(percentage)=100;

if (
    english < 35 ||
    physics < 35 ||
    marathi < 35 ||
    math < 35 ||
    biology < 35 ||
    chemistry < 35
  ) {
    console.log(studName + " is failed");
  } else {
    console.log(studName + " has got " + percentage + "% marks");
  }


  switch (percentage) {
    case percentage >= 35 && percentage < 45:
      console.log("Pass class");
      break;
    case percentage >= 45 && percentage < 60:
      console.log("Second class");
      break;
    case percentage >= 60 && percentage < 75:
      console.log("First class");
      break;
    case percentage >= 75 && percentage <= 100:
      console.log("Distinction class");
      break;
    default:
      console.log(" Invalid calculations ");
  }

