import { useLinks } from "@hooks/useLinks";
import { IKContext, IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import teachers from "@jsons/teachers.json";
export default function Teachers() {
  const { urlEndPoint, path } = useLinks();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1 className="text-center my-10">
        <strong>Welcome</strong> {user.name}
      </h1>
      <div className="flex max-sm:flex-col justify-evenly items-center h-[70vh]">
        {teachers.map((items) => {
          return (
            <IKContext urlEndpoint={urlEndPoint} key={items._id}>
              <div>
                <Link
                  to={items.redirect}
                  className="flex flex-col justify-center items-center"
                >
                  <IKImage
                    path={`${path}/${items.image}`}
                    className="w-20"
                    loading="lazy"
                    lqip={{ active: true, quality: 20, blur: 10 }}
                  />
                  <span>{items.text}</span>
                </Link>
              </div>
            </IKContext>
          );
        })}
      </div>
    </>
  );
}
