import React from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import Button from "../design/Home/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const HighLightNavbar = (route) => {
    console.log("--->", location.pathname);
    console.log("==>", { path: route });
    console.log(matchPath({ path: route }, location.pathname));
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className=" flex h-14 items-center justify-center border-b-[1px] border-b-richblack-600">
      <div className="flex flex-row items-center justify-between max-w-maxContent w-11/12">
        <Link to={"/"} className="">
          <img src={Logo} alt="" srcset="" loading="lazy" width={150} />
        </Link>
        <div className="text-white flex flex-row gap-4">
          {NavbarLinks.map((element, index) => {
            return (
              <div key={index}>
                {element.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link
                    className={`${
                      HighLightNavbar(element?.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                    to={element?.path}
                  >
                    {element.title}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-4">
          <Button active={false} linkto={"/signup"}>
            <div className="flex text-white flex-row items-center gap-3">
              Login
            </div>
          </Button>
          <Button active={true} linkto={"/signup"}>
            <div className="flex flex-row items-center gap-3">Sign Up</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
