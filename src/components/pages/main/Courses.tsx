import { Cards } from "@components/Cards";

export const Courses = () => {
  const classes = ["5th", "6th", "7th", "8th", "9th", "10th"];
  return (
    <>
      <h1
        className="text-center font-semibold text-3xl dm-sans mt-5"
        data-aos="fade-up"
      >
        Courses
      </h1>
      <div className="my-5" data-aos="fade-up">
        <p className="text-lg dm-sans mx-3 leading-10">
          We offer a wide range of courses in the field of Engineering and
          Technology. We have a team of highly qualified and experienced faculty
          members who are dedicated to providing quality education to our
          students. We have a very strong focus on providing quality education
          at affordable prices to every student. We offer an exceptional and
          advanced curriculum for all our students, which prepares them for the
          global marketplace. Encouraging faculty-student participatory
          interaction on matters of local, regional, national and international
          significance.
        </p>
      </div>
      {/* Pricing */}
      <h2
        className="text-center font-semibold text-3xl dm-sans"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Pricing
      </h2>
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 place-items-center my-10">
        {classes.map((items, index) => (
          <Cards key={index} name={items} />
        ))}
      </div>
    </>
  );
};
