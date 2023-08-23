import { useLinks } from "@hooks/useLinks";
import { IKContext, IKImage } from "imagekitio-react";

export function About() {
  const { urlEndPoint, images } = useLinks();
  const image = [
    `${images}/about1.webp`,
    `${images}/about2.webp`,
    `${images}/about3.webp`,
    `${images}/about4.webp`,
  ];
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-center text-2xl font-semibold dm-sans my-5">
          About Us
        </h1>
        <div
          className="flex flex-col justify-center items-start mx-3 my-5"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="text-xl dm-sans">
            We are Experts Learning Institution
          </h1>
          <p className="quicksand font-medium">
            We are Experts Learning Institution with a strong focus on providing
            quality education at affordable prices to every student. We offer an
            exceptional and advanced curriculum for all our students, which
            prepares them for the global marketplace. Encouraging
            faculty-student participatory interaction on matters of local,
            regional, national and international significance.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-start mx-3 my-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-xl dm-sans">Our Goal</h1>
          <p className="quicksand font-medium">
            We believe education is one of the most powerful ways to help people
            improve their lives. Many of us have learned that the world can be a
            better place when we learn what it takes to make positive changes in
            the world. Providing a wide range of learning opportunities at
            Undergraduate, Postgraduate and doctorate levels
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-start mx-3 my-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-xl dm-sans">Our Mission</h1>
          <p className="quicksand font-medium">
            Our mission is to educate our students, and provide them with a very
            competitive fee structure. We will work towards that goal with great
            success. Join us in our journey and become one of our most valued
            stakeholders. To contribute effectively to the welfare of society,
            address the local and global challenges; respecting culture,
            environment, and sustainability
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-start mx-3 my-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-xl dm-sans">Our Vision</h1>
          <p className="quicksand font-medium">
            The vision statement of the University of Bikaner given below
            reflects its deep conviction for high quality inclusive education:
            To remain always inclusive and quality conscious, and with deep
            conviction that knowledge not only improves the quality of life, but
            leads to good character, to capitalize on our inherent advantages to
            generate skilled manpower for nation building through excellent
            teaching, attracting talent, fostering creativity, research, and
            innovation. Our vision is to provide students with a positive and
            enriching experience, which will allow them to become successful
            adults in the world of work. We want each student to develop the
            skills necessary for lifelong learning and to create an environment
            where academic success is celebrated by all.
          </p>
        </div>
      </div>
      {/* Ranking */}
      <div className="flexColCenter my-5 mx-3">
        <h1 className="text-2xl font-bold dm-sans" data-aos="fade-up">
          Shri Ram College Ranking
        </h1>
        <p className="quicksand font-medium my-3" data-aos="fade-up">
          The University has maintained its position at the top in the country
          as per the Centre for World University Ranking (CWUR) ranking and is
          8th in the National Institutional Ranking Framework. It is also among
          the top 10 Indian public educational institutions/universities and the
          first among Indian public universities under QS BRICS University
          Rankings. The h-index of the University touched 192, one of the
          highest among Indian universities.
        </p>
        <p className="quicksand font-medium my-3" data-aos="fade-up">
          Foster all-round development of students through multi-faceted
          education and sustained engagement with local, national and global
          communities, and nurture lifelong inspired learners from across the
          globe in line with our cultural ideal of ‘Vasudhaiva Kutumbakam’.
        </p>
      </div>
      <h1 className="text-2xl dm-sans text-center font-bold my-5">
        Our Campus
      </h1>
      <IKContext urlEndpoint={urlEndPoint}>
        <div className="grid lg:grid-flow-col grid-rows-1 place-items-center gap-5 my-6 overflow-x-hidden">
          {image.map((img, index) => {
            return (
              <IKImage
                key={index}
                path={img}
                transformation={[{ width: "300" }]}
                lqip={{ active: true }}
                loading="lazy"
                alt="Student Images"
                data-aos="fade-left"
                data-aos-duration="1500"
                className="rounded shadow-md effect"
              />
            );
          })}
        </div>
      </IKContext>
    </>
  );
}
