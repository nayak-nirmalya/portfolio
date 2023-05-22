import React from "react";

const Education = () => {
  return (
    <div className="mt-2 flex flex-col px-6 pb-2 lg:mt-10 lg:px-36">
      <h2 className="mx-auto items-center pb-4 text-4xl font-extrabold lg:mx-0 lg:pb-6">
        Education
      </h2>

      <ul className="mx-4 list-disc leading-8 lg:mx-20 lg:text-lg lg:leading-10">
        <li>
          <i>Veer Surendra Sai University of Technology</i> - <strong>MCA</strong>, 2018-2021
          <ul className="mx-8 list-disc lg:mx-12">
            <li>Master in Computer Application with 8.36/10 CGPA</li>
          </ul>
        </li>
        <li>
          <i>Kendrapara Autonomous College</i> - <strong>B.Sc. (Physics)</strong>, 2015-2018
          <ul className="mx-8 list-disc lg:mx-12">
            <li>Graduated in Physics (Honours) with 8.21/10 CGPA</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Education;
