var Classroom = require("./classroom.js");

// var firstClass = new Classroom("Adam", 208);

// firstClass.addstudents("soheila", "javascript", "A");
// firstClass.addstudents("Farzad", "React.js", "A");

// console.log(firstClass);

var inquirer = require("inquirer");

//what is your classroom number
//how many students are in this class?
//add the students to the class
var newClassroom;

inquirer
  .prompt([
    {
      name: "classNum",
      message: "what is the classroom number?"
    },
    {
      name: "profName",
      message: "what is professor's name?"
    },

    {
      name: "studentNum",
      message: "how many students are in the class?"
    }
  ])
  .then(function(data) {
    // for (i = 0; i < parseInt(data.studentNum).length; i++) {
    // addStudent(data.classNum, data.profName);
    newClassroom = new Classroom(data.profName, data.classNum);
    addStudents(parseInt(data.studentNum));
    // console.log(parseInt(data.studentNum));
    // }
  });

var count = 0;
function addStudents(studentnumber) {
  inquirer
    .prompt([
      {
        name: "name",
        message: "student's name:"
      },
      {
        name: "favoritsub",
        message: "student's favorite subject:"
      },
      {
        name: "gpa",
        message: "student's gpa:"
      }
    ])
    .then(function(data) {
      if (count < studentnumber) {
        newClassroom.addstudents(data.name, data.favoritsub, data.gpa);
        // console.log(newClassroom);
        count++;
        addStudents(studentnumber);
      } else {
        console.log("added all the students");
      }
    });
}
