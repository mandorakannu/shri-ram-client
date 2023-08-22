interface Comman {
  id: string;
  name: string;
  motherName: string;
  fatherName: string;
  dateOfBirth: string;
  age: number;
  password: string;
  uniqueId: string;
  mobileNumber: number;
}
interface IStudents extends Comman {
  className: string;
  subjects: object;
}

interface ITeachers extends Comman {
  qualification: string;
  SubjectProfile: string;
}

interface IAdmins extends Comman {}

interface IUser extends IStudents, ITeachers, IAdmins {}

export type { IStudents, ITeachers, IAdmins, IUser };
