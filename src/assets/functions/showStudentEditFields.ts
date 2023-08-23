let name, motherName, fatherName, age, dob;

const showStudentName = () => {
  name = document.getElementById("studentNameUpdate");
  if (!name) return new Error("No element found");
  name.classList.toggle("hidden");
};
const showMotherName = () => {
  motherName = document.getElementById("motherNameUpdate");
  if (!motherName) return new Error("No element found");
  motherName.classList.toggle("hidden");
};
const showFatherName = () => {
  fatherName = document.getElementById("fatherNameUpdate");
  if (!fatherName) return new Error("No element found");
  fatherName.classList.toggle("hidden");
};
const showAge = () => {
  age = document.getElementById("ageUpdate");
  if (!age) return new Error("No element found");
  age.classList.toggle("hidden");
};
const showDateOfBirth = () => {
  dob = document.getElementById("dobUpdate");
  if (!dob) return new Error("No element found");
  dob.classList.toggle("hidden");
};

export {
  showStudentName,
  showMotherName,
  showFatherName,
  showAge,
  showDateOfBirth,
};
