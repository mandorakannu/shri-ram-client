import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";

export function TimeTable() {
  if (!useVerifyUser()) return <Auth />;
  return (
    <table className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100% my-40">
      <thead>
        <tr>
          <th className="dcf-txt-center" scope="col">
            Days
          </th>
          <th className="dcf-txt-center" scope="col">
            English
          </th>
          <th className="dcf-txt-center" scope="col">
            Hindi
          </th>
          <th className="dcf-txt-center" scope="col">
            Maths
          </th>
          <th className="dcf-txt-center" scope="col">
            Science
          </th>
          <th className="dcf-txt-center" scope="col">
            Computer
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="dcf-txt-center" scope="row">
            Monday
          </th>
          <td className="dcf-txt-center" data-label="English">
            9:00-10:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Hindi">
            10:00-11:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Maths">
            11:00-12:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Science">
            12:00-1:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Computer">
            1:00-2:00 PM
          </td>
        </tr>
        <tr>
          <th className="dcf-txt-center" scope="row">
            Tuesday
          </th>
          <td className="dcf-txt-center" data-label="English">
            9:00-10:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Hindi">
            10:00-11:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Maths">
            11:00-12:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Science">
            12:00-1:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Computer">
            1:00-2:00 PM
          </td>
        </tr>
        <tr>
          <th className="dcf-txt-center" scope="row">
            Wednesday
          </th>
          <td className="dcf-txt-center" data-label="English">
            9:00-10:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Hindi">
            10:00-11:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Maths">
            11:00-12:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Science">
            12:00-1:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Computer">
            1:00-2:00 PM
          </td>
        </tr>
        <tr>
          <th className="dcf-txt-center" scope="row">
            Thursday
          </th>
          <td className="dcf-txt-center" data-label="English">
            9:00-10:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Hindi">
            10:00-11:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Maths">
            11:00-12:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Science">
            12:00-1:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Computer">
            1:00-2:00 PM
          </td>
        </tr>
        <tr>
          <th className="dcf-txt-center" scope="row">
            Friday
          </th>
          <td className="dcf-txt-center" data-label="English">
            9:00-10:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Hindi">
            10:00-11:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Maths">
            11:00-12:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Science">
            12:00-1:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Computer">
            1:00-2:00 PM
          </td>
        </tr>
        <tr>
          <th className="dcf-txt-center" scope="row">
            Saturday
          </th>
          <td className="dcf-txt-center" data-label="English">
            9:00-10:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Hindi">
            10:00-11:00 AM
          </td>
          <td className="dcf-txt-center" data-label="Maths">
            11:00-12:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Science">
            12:00-1:00 PM
          </td>
          <td className="dcf-txt-center" data-label="Computer">
            1:00-2:00 PM
          </td>
        </tr>
      </tbody>
    </table>
  );
}
