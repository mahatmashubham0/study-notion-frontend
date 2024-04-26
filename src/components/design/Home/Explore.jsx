import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighLightText from "./HighLightText";
import CourseCard from '../../../components/design/Home/CourseCard'

const TabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const Explore = () => {
  const [currentTab, setCurrentTab] = useState(TabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);
    console.log(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col space-y-4 items-center mx-auto">
      <div className="text-4xl text-center font-semibold">
        Unlock Your <HighLightText text={"Power of Code "} />
      </div>

      <div className="text-center text-richblack-300 text-md">
        Learn Anything and you can see magic{" "}
      </div>

      <div className="flex md:flex-row flex-col font-semibold cursor-pointer gap-2 rounded-full px-8 py-1">
        {TabsName.map((element, index) => {
          return (
            <div
              className={`border rounded-full px-8 py-1 transition-all duration-200 hover:scale-95 ${
                currentTab === element ? "bg-richblack-900 text-yellow-5  " : ""
              }`}
              key={index}
              onClick={() => setMyCard(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
      

      {/* Cards */}

      <div className="lg:h-[150px] ">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between w-full">
          {courses.map((element, index) => {
            console.log("==>",element)
            return (
              <div key={index}>
                <CourseCard 
                  cardData={element}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
