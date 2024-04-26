import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../components/design/Home/Button";
import Instructor from '../../../assets/Images/Instructor.png'

const InstructorSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center py-8  gap-8 space-x-16">


      <div className="shadow-2xl md:w-[50%] w-full shadow-blue-400 p-12">
        <img src={Instructor} alt="" srcset="" />
      </div>


      <div className="flex flex-col gap-8 md:w-[50%] w-full justify-center">
        <div className="text-2xl font-semibold">Become an Instructor</div>
        <div className="text-richblack-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          accusamus, accusantium libero provident magnam tempora!
        </div>
        <div className="w-fit">
          <Button active={true} linkto={"/signup"}>
            <div className="flex flex-row items-center gap-3">
              Start Teaching from today
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
