import React from "react";

const Education = () => {
  return (
    <div className="mt-2 flex flex-col px-6 pb-2 lg:mt-10 lg:px-36">
      <h2 className="mx-auto items-center pb-4 text-4xl font-extrabold lg:mx-0 lg:pb-6">
        Education
      </h2>

      <ul className="mx-4 list-inside list-disc text-center leading-8 lg:mx-20 lg:list-outside lg:text-start lg:text-lg lg:leading-10">
        <li>
          <i>Veer Surendra Sai University of Technology</i>{" "}
          <div className="hidden lg:inline-block">-</div> <strong>MCA</strong>, 2018-2021
          <ul className="mx-auto mt-1 text-sm lg:mx-12 lg:mt-0 lg:list-disc lg:text-lg">
            <li>
              Master in Computer Application with <strong>8.36/10</strong> CGPA
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <i>Kendrapara Autonomous College</i> <div className="hidden lg:inline-block">-</div>{" "}
          <div className="inline-block">
            <strong>B.Sc. (Physics)</strong>, 2015-2018
          </div>
          <ul className="mx-auto mt-1 text-sm lg:mx-12 lg:mt-0 lg:list-disc lg:text-lg">
            <li>
              Graduated in Physics (Honours) with <strong>8.21/10</strong> CGPA
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Education;
