export const stepsDetails = [
  {
    id: 0,
    name: "Personal",
    fields: ["studentName", "dob", "nationality", "gender", "email", "address"],
  },
  {
    id: 1,
    name: "Academic",
    fields: [
      "schoolName",
      "qualification",
      "graduationDate",
      "grade",
      "schoolAddress",
    ],
  },
  {
    id: 2,
    name: "Academi",
    fields: [
      "firstCoursePreference",
      "secondCoursePreference",
      "thirdCoursePreference",
      "fourthCoursePreference",
    ],
  },
];
export const defaultStudentDetails = {
  studentName: "",
  dob: new Date(),
  nationality: "",
  gender: "",
  email: "",
  address: "",
  schoolName: "",
  qualification: "",
  graduationDate: new Date(),
  grade: "",
  schoolAddress: "",
  firstCoursePreference: "",
  secondCoursePreference: "",
  thirdCoursePreference: "",
  fourthCoursePreference: "",
};
