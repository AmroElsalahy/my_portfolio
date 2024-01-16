import React from "react";
import dal from "../assets/exper/dal.jpg";
import isans from "../assets/exper/isans.jpg";

const Experience = () => {
  const Experience = [
    {
      id: 1,
      title: "Technical Service Supports",
      company: "Dalhousie University",
      date: "September 2023 - Present",
      src: dal,
    },
    {
      id: 2,
      title: "Immigrant Youth Employability Project",
      company: "Immigrant Services Nova Scotia",
      date: "November 2021 - January 2022",
      src: isans,
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen mt-16"
      style={{ marginTop: "0px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Working Experience
          </p>
        </div>

        <div className="relative">
          {Experience.map(({ id, title, company, date, src }) => (
            <div key={id} className={`relative flex items-center mb-8`}>
              <div
                className={`w-24 h-24 bg-black rounded-full z-10 overflow-hidden`}
              >
                {(
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
              </div>
              <div className="ml-4 z-20">
                <p className="font-bold">{title}</p>
                <p className="italic font-light text-white-500">{company}</p>
                <p className="text-gray-500 text-sm">{date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
