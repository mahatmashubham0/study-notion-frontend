import React from "react";

// Icons Import
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

//components
import HighLightText from "../components/design/Home/HighLightText";
import Button from "../components/design/Home/Button";
import CodeBlocks from "../components/design/Home/CodeBlocks";

import Banner from "../assets/Images/banner.mp4";
import TImeLineSection from "../components/design/Home/TImeLineSection";
import LearningLanguageSection from "../components/design/Home/LearningLanguageSection";
import InstructorSection from "../components/design/Home/InstructorSection";
import ReviewSection from "../components/design/Home/ReviewSection";
import Explore from "../components/design/Home/Explore";
// Image and Video Import

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="flex flex-col items-center w-11/12 max-w-maxContent mx-auto text-white space-y-8">
        <Link to={"signup"}>
          <div className="rounded-full shadow-lg border bg-richblack-800 w-fit mt-16 p-1 font-bold text-richblack-200 transition-all duration-200 hover:scale-95">
            <div className="flex items-center px-12 gap-2 py-1 group-hover:bg-richblack-600 transition-all duration-200 hover:scale-95">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* heading */}
        <div className="font-semibold text-center text-4xl">
          <h1>
            Empower Your Future with <HighLightText text={"Coding Skills"} />
          </h1>
        </div>

        {/* Ṭext */}
        <div className="text-center text-lg font-bold text-richblack-300 w-[85%] mx-auto ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* Buttons  */}
        <div className="flex flex-row py-8 gap-4 items-center">
          <Button active={true} linkto={"/signup"} children={"Learn More"} />
          <Button linkto={"/login"} children={"Book a Demo"} />
        </div>

        {/* Videos */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighLightText text={" coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighLightText text={" coding potential"} /> coding in seconds
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continure Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

            <Explore />

      </div>

      {/* Section 2 */}

      <div className=" bg-pure-greys-5 text-richblack-700">
        {/* Button and images */}
        <div className="h-[335px] bgHomeImage">
          {/* for set the width and center */}
          <div className="flex flex-col items-center w-11/12 max-w-maxContent mx-auto gap-5">
            {/* Buttons */}
            <div className="flex flex-row gap-7 text-white mt-44">
              <Button active={true} linkto={"/signup"}>
                <div className="flex flex-row items-center gap-3">
                  Expolre New Catalog
                  <FaArrowRight />
                </div>
              </Button>
              <Button active={false} linkto={"/login"}>
                <div className="flex flex-row items-center gap-3">
                  Learn More
                  <FaArrowRight />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* white-section */}

        <div className="flex flex-col items-center w-11/12 max-w-maxContent mx-auto gap-7 justify-center">
          <div className="flex flex-row gap-5 mt-8">
            <div className="text-4xl px-4 py-1 font-semibold">
              Get the skills you need for a{" "}
              <HighLightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col px-4 py-1 gap-10 w-[60%] items-start">
              <p>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <div>
                <Button active={true} linkto={"/login"}>
                  <div className="flex flex-row items-center gap-3">
                    Learn More
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <TImeLineSection />

          <LearningLanguageSection />
        </div>

      </div>

      {/* Section 3 */}

      <div className="flex flex-col items-center justify-center w-11/12 max-w-maxContent mx-auto text-white space-y-8">

                <InstructorSection />

              <h2 className="text-4xl font-semibold text-center mt-10">review from Other learners</h2>

                <ReviewSection />
      </div>

      {/* Section 4 */}
    </div>
  );
};

export default Home;
