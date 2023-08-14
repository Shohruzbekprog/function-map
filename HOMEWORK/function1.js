function getNamesWithGrade(grade) {
  const students = [
    { name: "Quincy", percent: 96 },
    { name: "Jason", percent: 84 },
    { name: "Alexis", percent: 100 },
    { name: "Sam", percent: 65 },
    { name: "Katie", percent: 90 },
    { name: "Anna", percent: 75 },
  ];

  const filteredStudents = students.filter((student) => {
    if (grade === 5) {
      return student.percent >= 85 && student.percent <= 100;
    }
    if (grade === 4) {
      return student.percent >= 70 && student.percent < 85;
    }
    if (grade === 3) {
      return student.percent >= 60 && student.percent < 70;
    }
  });

  const names = filteredStudents.map((student) => student.name);

  return names;
}

console.log(getNamesWithGrade(5)); 

