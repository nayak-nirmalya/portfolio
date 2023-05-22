import React from "react";

const Experience = () => {
  return (
    <div className="mt-2 flex flex-col px-6 pb-2 lg:mt-10 lg:px-36">
      <h2 className="mx-auto items-center pb-4 text-4xl font-extrabold lg:mx-0 lg:pb-6">
        Experience
      </h2>

      <ul
        className="
          mx-4
          list-disc
          leading-8
          lg:mx-20
          lg:text-lg 
          lg:leading-10
        "
      >
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
