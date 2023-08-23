import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import "@styles/table.css";
export const Result = () => {
  const user = useSelector((state: RootState) => state.user);
  const { english, hindi, maths, science, computer } = user.subjects;
  const { name, motherName, fatherName, dateOfBirth, className } = user;
  const overallMarks = (): number =>
    english + hindi + maths + science + computer;

  const isExcellent = (marks: number): string => {
    return marks >= 90 ? "Excellent" : "Very Good";
  };
  return (
    <>
      {user && (
        <table className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100% my-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">{name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mother Name</th>
              <td>{motherName}</td>
            </tr>
            <tr>
              <th scope="row">Father Name</th>
              <td>{fatherName}</td>
            </tr>
            <tr>
              <th scope="row">Class</th>
              <td>{className}</td>
            </tr>
            <tr>
              <th scope="row">DOB</th>
              <td>{dateOfBirth}</td>
            </tr>
          </tbody>
        </table>
      )}
      {user.subjects && (
        <>
          <table className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100% my-5">
            <thead>
              <tr>
                <th scope="col">Subjects</th>
                <th scope="col">Marks</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">English</th>
                <td data-label="Marks">{english}</td>
                <td data-label="Remarks">{isExcellent(english)}</td>
              </tr>
              <tr>
                <th scope="row">Hindi</th>
                <td data-label="Marks">{hindi}</td>
                <td data-label="Remarks">{isExcellent(hindi)}</td>
              </tr>
              <tr>
                <th scope="row">Mathematics</th>
                <td data-label="Marks">{maths}</td>
                <td data-label="Remarks">{isExcellent(maths)}</td>
              </tr>
              <tr>
                <th scope="row">Science</th>
                <td data-label="Marks">{science}</td>
                <td data-label="Remarks">{isExcellent(science)}</td>
              </tr>
              <tr>
                <th scope="row">Computer</th>
                <td data-label="Marks">{computer}</td>
                <td data-label="Remarks">{isExcellent(computer)}</td>
              </tr>
            </tbody>
          </table>
          <table className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100% my-5">
            <thead>
              <tr>
                <th scope="col">Overall Marks</th>
                <th scope="col">{overallMarks()}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Result</th>
                <td>{overallMarks() >= 33/100 ? "Pass": "Fail"}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
