const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
const grades = [
  { percentage: 95 },
  { percentage: 85 },
  { percentage: 75 },
  { percentage: 65 },
];

const gradedResults = grades.map((grade) => {
  let gradeValue;
  if (grade.percentage >= 90 && grade.percentage <= 100) {
    gradeValue = 5;
  } else if (grade.percentage >= 80 && grade.percentage < 90) {
    gradeValue = 4;
  } else if (grade.percentage >= 70 && grade.percentage < 80) {
    gradeValue = 3;
  } else {
    gradeValue = 2;
  }

  return {
    ...grade,
    grade: gradeValue,
    isPassed: grade.percentage > 70,
  };
});

console.log(pupils.protcent);
console.log(gradedResults);