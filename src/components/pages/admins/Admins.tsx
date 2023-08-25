import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import admins from "@jsons/admins.json";
import { Link } from "react-router-dom";
import { IKContext, IKImage } from "imagekitio-react";
import { useLinks } from "@hooks/useLinks";
import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";

export function Admins() {
  const { urlEndPoint, path } = useLinks();
  const user = useSelector((state: RootState) => state.user);
  if (!useVerifyUser()) return <Auth />;
  return (
    <>
      <h1 className="text-center my-10">
        <strong>Welcome To The Admin Panel</strong> <br /> {user.name}
      </h1>
      <div className="flex max-lg:flex-col justify-evenly h-[60dvh]">
        {admins.map((items, index: number) => (
          <Link
            to={items.link}
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <IKContext urlEndpoint={urlEndPoint}>
              <IKImage
                path={`${path}/${items.image}`}
                className="max-lg:w-10 w-32"
                loading="lazy"
                lqip={{ active: true, quality: 20, blur: 10 }}
              />
              <span className="my-5">{items.text}</span>
            </IKContext>
          </Link>
        ))}
      </div>
    </>
  );
}
