function digitSum(number) {
  if (number < 10) {
    return number;
  }

  return (number % 10) + digitSum(Math.floor(number / 10));
}
console.log(digitSum(12345)); 
console.log(digitSum(987654321)); 
