import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

import TimelineImage from "../../../assets/Images/TimelineImage.png";

const TImeLineSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-16 w-full gap-15 space-y-16">
      <div className="md:w-[40%] w-full mx-auto items-start pl-8 flex flex-col space-y-8 md:space-y-16 ">
        <div className="flex flex-row items-center gap-4">
          <div className="text-4xl rounded-full w-12 h-12 justify-center items-center text-center bg-white shadow-2xl ">
            <img
              src={logo1}
              alt=""
              className="text-center mx-auto mt-2"
              srcset=""
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-semibold text-xl">Leadership</h3>
            <p>Fully committed to the success company</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-4xl rounded-full w-12 h-12 justify-center items-center text-center bg-white shadow-2xl ">
            <img
              src={logo2}
              alt=""
              className="text-center mx-auto mt-2"
              srcset=""
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-semibold text-xl">Responsibility</h3>
            <p>Students will always be our top priority</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-4xl rounded-full w-12 h-12 justify-center items-center text-center bg-white shadow-2xl ">
            <img
              src={logo3}
              alt=""
              className="text-center mx-auto mt-2"
              srcset=""
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="font-semibold text-xl">Flexibility</h3>
            <p>The ability to switch is an important skills</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-4xl rounded-full w-12 h-12 justify-center items-center text-center bg-white shadow-2xl ">
            <img
              src={logo4}
              alt=""
              className="text-center mx-auto mt-2"
              srcset=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Solve the problem</h3>
            <p>Code your way to a solution</p>
          </div>
        </div>
      </div>

      <div className="md:w-[60%] w-full relative shadow-2xl shadow-blue-200">
        <img src={TimelineImage} alt="" />
      </div>
    </div>
  );
};

export default TImeLineSection;
