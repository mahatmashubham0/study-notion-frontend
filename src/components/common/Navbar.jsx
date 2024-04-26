import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import Button from "../design/Home/Button";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const subLinks = [
  {
    title: "python",
    link: "/catalog/python"
  },
  {
    title: "web deb",
    link: "/catalog/web-development"
  },
]

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  // const [subLinks, setSubLinks] = useState([]);

  // const getAllCategorisOfNavbar = async () => {
  //   try {
  //     const result = await apiConnector("GET", categories.categories_api);
  //     console.log("this is sublinks of navbar", result);
  //     setSubLinks(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Could not fetch the data");
  //   }
  // };

  // calling api
  useEffect(() => {
    // getAllCategorisOfNavbar
  }, []);

  const location = useLocation();
  const HighLightNavbar = (route) => {
    // console.log("It take url path except of localhost:3300", location.pathname);
    // console.log(
    //   "we have to write { path: route } beacuse if we use matchPath function",
    //   { path: route }
    // );
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className=" flex h-14 items-center justify-center border-b-[1px] border-b-richblack-600">
      <div className="flex flex-row items-center justify-between max-w-maxContent w-11/12">
        {/* Icons */}
        <Link to={"/"} className="">
          <img src={Logo} alt="" srcset="" loading="lazy" width={150} />
        </Link>

        {/* Navbar */}
        <div className="text-white flex flex-row gap-4">
          {NavbarLinks.map((element, index) => {
            return (
              <div key={index}>
                {
                  // we use this beacuse we want to add catalog data fetch from Backend
                  //  here we write code which come from backend
                element.title === "Catalog" ? 
                ( 
                  <div className="group relative">
                    <Link to={element.path} className="text-richblack-25 flex flex-row items-center justify-center gap-1">
                      {element.title}
                      <IoIosArrowDropdownCircle className="text-lg"/>
                    </Link>


                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {/* {false ? (
                          <p className="text-center">Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length
                                 > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )} */}
                    </div>





                  </div>
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
                )
                
                }
              </div>
            );
          })}
        </div>

        {/* Login and signup */}

        <div className="flex flex-row gap-x-4">
          {user && user?.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Button active={false} linkto={"/login"}>
              <div className="flex text-white flex-row items-center gap-3">
                Login
              </div>
            </Button>
          )}

          {token === null && (
            <Button active={true} linkto={"/signup"}>
              <div className="flex flex-row items-center gap-3">Sign Up</div>
            </Button>
          )}

          {token !== null && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
