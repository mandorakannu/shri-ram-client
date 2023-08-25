import { useState, useEffect } from "react";
import "@styles/table.css";
import axios from "axios";
import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";

interface Complain {
  name: string;
  message: string;
}

export function Complain() {
  const fetchAllComplain = async () => {
    const res = await axios.get("/api/getComplains");
    setComplainData(res.data);
  };

  const [complainData, setComplainData] = useState<Complain[]>([]);
  useEffect(() => {
    fetchAllComplain();
    return () => {
      setComplainData([]);
    };
  }, []);
  if(!useVerifyUser()) return <Auth />;
  return (
    <>
      {complainData &&
        complainData.map((complain: Complain, index: number) => (
          <table
            className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100% mb-10"
            key={complain.message}
          >
            <thead>
              <tr>
                <th scope="col">Complain</th>
                <th scope="col">{index + 1}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{complain.name}</td>
              </tr>
              <tr>
                <th scope="row">Message</th>
                <td>{complain.message}</td>
              </tr>
            </tbody>
          </table>
        ))}
    </>
  );
}
