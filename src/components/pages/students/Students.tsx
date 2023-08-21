import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { IKContext, IKImage } from "imagekitio-react";
import students from "@jsons/students.json";
import { useLinks } from "@hooks/useLinks";
export const Students = () => {
  const { urlEndPoint, path } = useLinks();
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1 className="text-center mt-5">
        <strong>Welcome </strong>
        <span className="cursor-default">{user.name}</span>
      </h1>
      <IKContext urlEndpoint={urlEndPoint}>
        <div className="flex justify-evenly items-center flex-warp flex-shrink flex-col sm:flex-row h-[80vh] gap-3 my-5">
          {students.map((item) => (
            <div key={item._id} className="hover:shadow-md shadow-black p-10">
              <Link
                to={item.link}
                className="flex flex-col justify-center items-center"
              >
                <IKImage
                  path={`${path}/${item.imagePath}`}
                  className="w-20"
                  loading="lazy"
                  lqip={{ active: true, quality: 20, blur: 10 }}
                />
                <span>{item.text}</span>
              </Link>
            </div>
          ))}
        </div>
      </IKContext>
    </>
  );
};
