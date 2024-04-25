import React from "react";

// Icons Import
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

//components
import HighLightText from "../components/HightLightTextr/HighLightText";
import Button from "../components/HightLightTextr/Button";
import CodeBlocks from "../components/HightLightTextr/CodeBlocks";

import Banner from "../assets/Images/banner.mp4";
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
          position={'lg:flex-row'}
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
          position={'lg:flex-row-reverse'}
            heading={
              <div className="text-4xl font-semibold">
                Start
                <HighLightText text={" coding potential"} />  coding in seconds
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
      </div>

      {/* Section 2 */}

      {/* Section 3 */}

      {/* Section 4 */}
    </div>
  );
};

export default Home;
