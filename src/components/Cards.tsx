import { HiCheckCircle } from "react-icons/hi";

export const Cards = ({ name }: { name: string }) => {
  const value = [
    "22 team members",
    "Integration help",
    "Sketch Files",
    "Complete documentation",
    "24x7 phone & email support",
  ];
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5
          className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {name}
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span
            className="text-3xl font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            ₹
          </span>
          <span
            className="text-5xl font-extrabold tracking-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            2.5K
          </span>
          <span
            className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            /Month
          </span>
        </div>
        <ul
          className="space-y-5 my-7"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {value.map((items) => {
            return (
              <li className="flex space-x-3">
                <HiCheckCircle className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {items}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
