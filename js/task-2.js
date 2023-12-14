// Task 2
// Створити об'єкт "Студент" з методами для додавання та видалення предметів, які він вивчає.

const student = {
  subjects: [],

  addSubject(subject) {
    if (this.subjects.includes(subject)) {
      console.log(`Ви вже вивчаєте предмет ${subject}.`);
    } else {
      this.subjects.push(subject);
      console.log(`Предмет ${subject} додано.`);
    }
  },

  removeSubject(subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
      console.log(`Предмет ${subject} видалено.`);
    } else {
      console.log(`Ви не вивчаєте предмет ${subject}.`);
    }
  },
};

// Дані для перевірки:
student.addSubject("Математика"); // Предмет Математика додано.
student.addSubject("Історія"); // Предмет Історія додано.
student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject("Історія"); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject("Англійська"); // Ви не вивчаєте предмет Англійська.
