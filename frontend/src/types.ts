import { ReactNode } from "react";

export type DrawerMenuProps = {
  open: boolean;
  onClose: (a: boolean) => void;
};
export enum IconsEnum {
  home,
  issues,
  report,
  analyzer,
  data,
  settings,
}
export type navItemType = {
  label: string;
  icon: ReactNode;
  path: string;
};
export type PersonalDataType = {
  studentName: string;
  dob: Date;
  nationality: string;
  gender: string;
  email: string;
  address: string;
};

export type AcademicDataType = {
  schoolName: "";
  qualification: "";
  graduationDate: "";
  grade: "";
  schoolAddress: "";
};