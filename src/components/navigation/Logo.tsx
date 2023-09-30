import { IKContext, IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { useLinks } from "@hooks/useLinks";

export const Logo = ({ classes }: { classes?: string }) => {
  const { urlEndPoint, path } = useLinks();
  return (
    <>
      <Link to="/">
        <IKContext urlEndpoint={urlEndPoint}>
          <IKImage alt="Logo" path={`${path}/logo`} className={`${classes} w-10 h-10`} />
        </IKContext>
      </Link>
    </>
  );
};
