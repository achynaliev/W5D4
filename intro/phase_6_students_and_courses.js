function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];

  this.name = () => {
    return fname + ' ' + lname;
  };

  this.enroll = function(course) {
    for(let i = 0; i<this.courses.length;i++){
      if (this.courses[i].conflictsWith(course)){
        throw "Conflicting Courses";
      }
    }
    this.courses.push(course);
  };

  this.courseLoad = function() {
    let load = {};
    for(var i = 0; i < this.courses.length; i++ ) {
      let course = this.courses[i];
      if (load[course.dept]) {
        load[course.dept] += course.credits;
      } else {
        load[course.dept] = course.credits;
      }
    }

    return load;
  };
}

function Course(name, dept, credits, days, time) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.days = days;
  this.time = time;

  this.students = [];

  this.addStudent = function(student) {
    this.students.push(student);
    student.enroll(this);
  };

  this.conflictsWith = function(course2) {
    for(let i = 0; i<this.days.length;i++){
      if (course2.days.includes(this.days[i])&&this.time === course2.time){
        return true;
      }
    }

    return false;
  };
}

let student1 = new Student('Atai','Chynaliev');
let student2 = new Student('Mattie', 'Holtzer');
let course1 = new Course('Python', 'CS', 3, ['mon', 'wed', 'fri'], 3);
let course2 = new Course('Javascript', 'CS', 5, ['tue', 'thurs'], 5);
let course3 = new Course('Russian', 'Language', 50, ['mon', 'wed', 'fri'], 3);

course3.addStudent(student1);
course2.addStudent(student1);
course2.addStudent(student2);

console.log(course2.students);
console.log(student1.courses);
console.log(student1.courseLoad);

course1.addStudent(student1);
