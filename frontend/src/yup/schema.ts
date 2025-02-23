import * as Yup from "yup";
// Step 1 Validation Schema
export const combinedDataSchema = Yup.object().shape({
  studentName: Yup.string().required("Student Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  schoolName: Yup.string().required("School Name is required"),
  qualification: Yup.string().required("Qualification is required"),
  graduationDate: Yup.date().required("Graduation Date is required"),
  grade: Yup.string().required("Grade is required"),
  markSheet: Yup.string().required("Marksheet is required"),
  schoolAddress: Yup.string().required("School Address is required"),
  firstCoursePreference: Yup.string().required("First preference is required"),
  secondCoursePreference: Yup.string().required(
    "Second preference is required",
  ),
  thirdCoursePreference: Yup.string().required("Third preference is required"),
  fourthCoursePreference: Yup.string().required(
    "Fourth preference is required",
  ),
});

export type CombinedFormDataType = Yup.InferType<typeof combinedDataSchema>;
