var Student = require("./students.js");

var Classroom = function(profName, roomNum) {
  this.students = [];
  this.profName = profName;
  this.roomNum = roomNum;
  this.addstudents = function(name, favoritsub, gpa) {
    this.students.push(new Student(name, favoritsub, gpa));
  };
};

module.exports = Classroom;
