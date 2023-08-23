import { useLinks } from "@hooks/useLinks";
import { IKContext, IKImage } from "imagekitio-react";

export function FeePortal() {
  const { urlEndPoint, images } = useLinks();
  return (
    <>
      <h1 className="font-semibold text-2xl text-center my-5">Fee Portal</h1>
      <div className="flex justify-evenly max-sm:flex-col items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center">
          <IKContext urlEndpoint={urlEndPoint}>
            <IKImage
              path={`${images}/code.png`}
              className="w-64 bg-teal-100 border-2 border-stone-500  rounded px-2 py-1"
            />
          </IKContext>
          <span className="my-2">shriRamCollege@bank</span>
        </div>
        <div className="flex flex-col justify-center items-center max-sm:hidden">
          <p className="font-mono text-xl">Scan the QR Code for payment.</p>
          <span className="font-mono text-xl mx-auto">
            Save the transcation id for future use.
          </span>
          <span className="my-3">
            e.g. your transcation Id looks like:- UPI Transcation Id:{" "}
            <strong>812309745823</strong>
          </span>
        </div>
      </div>
    </>
  );
}
