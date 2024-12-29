let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let newRecord = [];
  day;

  for (let student of classRoom) {
    let studentName = Object.keys(student)[0];
    let studentRecord = student[studentName];

    for (let record of studentRecord) {
      if (record[day]) {
        newRecord.push(studentName);
      }
    }
  }
  return newRecord;
}
console.log(attendanceCheck("Monday"));
console.log(attendanceCheck("Tuesday"));
console.log(attendanceCheck("Wednesday"));
console.log(attendanceCheck("Thursday"));
console.log(attendanceCheck("Friday"));
