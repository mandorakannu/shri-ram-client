import { useLinks } from "@hooks/useLinks";
import { IKContext, IKImage } from "imagekitio-react";
import team from "@jsons/team.json";

export function Team() {
  const { urlEndPoint, images } = useLinks();
  return (
    <>
      <div className="flex flex-col justify-center items-center cursor-default background__secondary text-white">
        <span className="cursor-default text-4xl" data-aos="fade-up">
          Home &gt; Team
        </span>
        <span className="text-7xl font-mono my-3" data-aos="fade-up">
          Our Instructors
        </span>
      </div>
      <div className="grid place-items-center grid-flow-col my-10 overflow-x-hidden">
        {team.map((teacher) => {
          return (
            <IKContext urlEndpoint={urlEndPoint} key={teacher._id}>
              <div
                className="flex flex-col justify-center items-center cursor-default"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <IKImage
                  path={`${images}/${teacher.image}`}
                  transformation={[{ width: "300", height: "400" }]}
                  className="rounded-t shadow-md"
                />
                <div className="flex flex-col justify-center items-center cursor-default py-2 h-20 text-center my-auto w-[300px] text-xl font-sans rounded-b">
                  <span>{teacher.name}</span>
                  <span>{teacher.subject}</span>
                </div>
              </div>
            </IKContext>
          );
        })}
      </div>
    </>
  );
}
