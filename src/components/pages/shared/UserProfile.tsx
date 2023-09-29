import { useSelector } from "react-redux";
import { RootState } from "@store/store";
export function UserProfile() {
  const user = useSelector((state: RootState) => state.user);
  const { name, motherName, fatherName, dateOfBirth, age, id, mobileNumber } =
    user;
  const firstName = name.split(" ")[0] || "Kannu";
  const lastName = name.split(" ")[1] || "Mandora";
  return (
    <div
      className="dcf-overflow-x-auto grid place-items-center h-[80dvh]"
      tabIndex={0}
    >
      <img
        src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}`}
        alt={`${firstName} ${lastName} Avatar`}
        className="rounded-full w-32 h-w-32 shadow"
      />
      <table className="dcf-table dcf-table-bordered dcf-table-striped dcf-w-100%">
        <thead>
          <tr>
            <th scope="col">User Profile</th>
            <th scope="col">Your Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td data-label="Your Details">{name}</td>
          </tr>
          <tr>
            <th scope="row">Mother Name</th>
            <td data-label="Your Details">{motherName}</td>
          </tr>
          <tr>
            <th scope="row">Father Name</th>
            <td data-label="Your Details">{fatherName}</td>
          </tr>
          <tr>
            <th scope="row">Date Of Birth</th>
            <td data-label="Your Details">{dateOfBirth}</td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td data-label="Your Details">{age}</td>
          </tr>
          <tr>
            <th scope="row">Unique Id</th>
            <td data-label="Your Details">{id}</td>
          </tr>
          <tr>
            <th scope="row">Mobile no.</th>
            <td data-label="Your Details">{mobileNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
