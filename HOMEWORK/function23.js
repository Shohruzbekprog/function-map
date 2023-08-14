const studentsWithGrades = students.map(student => {
  let grade;
  
  if (student.percentage >= 90 && student.percentage <= 100) {
    grade = 5;
  } else if (student.percentage >= 80 && student.percentage < 90) {
    grade = 4;
  } else if (student.percentage >= 70 && student.percentage < 80) {
    grade = 3;
  } else {
    grade = 2;
  }
  
  return {
    name: student.name,
    percentage: student.percentage,
    grade: grade
  };
});
