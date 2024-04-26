import React from "react";
import HighLightText from "./HighLightText";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.png";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import Button from '../../../components/design/Home/Button'

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col items-center space-y-5 mb-4">
      <div className="text-4xl font-semibold ">
        Your Swiss Knife Four <HighLightText text={"learning And Laguage"} />
      </div>

      <div className="text-center text-richblack-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
        numquam accusamus amet tempora quo distinctio earum? Earum consequuntur
        pariatur voluptates alias dignissimos officia commodi velit molestias?
        Possimus incidunt ducimus consectetur dicta quas maiores!
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center mt-5">
        <img
          src={Know_your_progress}
          alt=""
          className="object-contain -mr-12 md:-mr-32"
          srcset=""
        />
        <img
          src={Compare_with_others}
          alt=""
          className="object-contain"
          srcset=""
        />
        <img
          src={Plan_your_lessons}
          alt=""
          className="object-contain -ml-12 md:-ml-32"
          srcset=""
        />
      </div>

      <Button active={true} linkto={"/signup"}>
        <div className="flex flex-row items-center gap-3">Learn More</div>
      </Button>
    </div>
  );
};

export default LearningLanguageSection;
