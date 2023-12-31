interface Comman {
  name: string;
  motherName: string;
  fatherName: string;
  dateOfBirth: string;
  age: number;
  password?: string;
  uniqueId?: string;
  mobileNumber?: number;
  role: "student" | "teacher" | "admin";
}
interface IStudents extends Comman {
  className: string;
  subjects?: {
    english: number;
    hindi: number;
    maths: number;
    science: number;
    computer: number;
  };
}

interface ITeachers extends Comman {
  qualification: string;
  SubjectProfile: string;
}

interface IAdmins extends Comman {}

interface IUser extends IStudents, ITeachers, IAdmins {}

interface IUpdateRecordStudents extends IStudents {
  newName: string;
  newMotherName: string;
  newFatherName: string;
  newDateOfBirth: string;
  newAge: number;
}

export type { IStudents, ITeachers, IAdmins, IUser, IUpdateRecordStudents };
