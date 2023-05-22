import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col px-6 lg:px-36">
      <h2 className="mx-auto items-center p-3 text-4xl font-extrabold lg:mx-0 lg:p-6">
        Experience
      </h2>

      <ul className="mx-4 list-disc leading-8 lg:mx-20 lg:text-lg lg:leading-10">
        <li>
          <i>Cognizant</i> - <strong>Programmer Analyst</strong>
          <ul className="mx-8 list-disc lg:mx-12">
            <li>Worked in Java, Spring Framework</li>
            <li>Automated test cases with Selenium</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
