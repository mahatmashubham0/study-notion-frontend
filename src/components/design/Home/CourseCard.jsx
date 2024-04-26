import React from "react";
import { FcAlphabeticalSortingZa, FcBarChart  } from "react-icons/fc";

const CourseCard = ({ cardData }) => {
  return (
    <div>
      <div className="md:w-[350px] md:h-[300px] p-6 flex flex-col gap-44 bg-richblack-800 text-pure-greys-5">
        <div className="h-[60px] text-richblack-300 flex flex-col gap-4">
          <div className="font-bold text-xl text-white">{cardData.heading}</div>
          <div>{cardData.description}</div>
        </div>
        <div className="flex h-[40%] border-t border-dotted font-semibold text-blue-200 justify-between flex-row items-center">
          <div className="flex flex-row items-center gap-2"><FcAlphabeticalSortingZa /> {cardData.level}</div>
          <div className="flex flex-row items-center gap-2"><FcBarChart  /> {cardData.lessionNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
