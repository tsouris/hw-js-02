// Task 4
// Напишіть програму для обчислення середнього балу студента. 
// Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. 
// Для обчислення середнього балу необхідно використовувати прототипне наслідування.

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.addGrade = function (grade) {
  this.grades.push(grade);
};

Student.prototype.calculateAverage = function () {
  if (this.grades.length === 0) {
    return 0;
  }

  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};

const student1 = new Student("Іван", "Іванов");

student1.addGrade(90);
student1.addGrade(85);
student1.addGrade(92);

const averageGrade = student1.calculateAverage();
console.log(
  `${student1.firstName} ${student1.lastName}: Середній бал - ${averageGrade}`
);
