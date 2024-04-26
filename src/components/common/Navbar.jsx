import React from "react";
import { Link, matchPath } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import Button from "../design/Home/Button";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

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
                {element.title === "Catalog" ? ( // we use this beacuse we want to add catalog data fetch from Backend
                  //  here we write code which come from backend
                  <div> 
                    
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
                )}
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
            <Button active={false}  linkto={"/login"}>
              <div className="flex text-white flex-row items-center gap-3">Login</div>
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
