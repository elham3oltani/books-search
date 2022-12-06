import React, { useState, useContext } from "react";
import { BsBookHalf, BsFillSuitHeartFill ,BsSuitHeart} from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { RiContactsFill, RiTeamLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { SiMicrodotblog } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { CartContextBook } from "../context/CartContext";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const {state} = useContext(CartContextBook);

  return (
    <>
      <div className="flex items-center font-Nunito justify-between m-2">
        <div className="lg:flex hidden items-center justify-around font-bold">
        <Link to="/">
        <span className="lg:flex  items-center">
            <BsBookHalf className="text-3xl mr-1 text-yellow-500" />
            BOOKSARVE
          </span>
        </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center justify-center text-xl">
            <li className="mr-10 p-2 cursor-pointer">Shop</li>
            <li className="mr-10 p-2 cursor-pointer">Blog</li>
            <li className="mr-10 p-2 cursor-pointer">New Books</li>
            <li className="mr-10 p-2 cursor-pointer">About Us</li>
          </ul>
        </div>

        <div className=" lg:hidden">
          <BiMenu
            className="text-4xl  cursor-pointer"
            onClick={() => {
              setNav(!nav);
            }}
          />
        </div>
        {nav ? (
          <div
            className="bg-black/80 w-full h-screen fixed top-0 left-0 z-10"
            onClick={() => {
              setNav(!nav);
            }}
          ></div>
        ) : (
          ""
        )}

        <div
          className={
            nav
              ? "fixed top-0 left-0 bg-white z-10 duration-400 w-[300px] h-screen"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-400"
          }
        >
          <span className="lg:hidden items-center text-lg flex font-bold font-sans p-2">
            <BsBookHalf className="text-4xl mr-1" />
            BOOKSARVE
          </span>
          <CgClose
            onClick={() => {
              setNav(!nav);
            }}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />

          <ul className="flex-col items-center justify-center text-xl">
            <li className="flex items-center mr-10 my-4 p-2 cursor-pointer">
              <FaShoppingBag className="mr-1" />
              Shop
            </li>
            <li className="flex items-center mr-10 my-4 p-2 cursor-pointer">
              <SiMicrodotblog className="mr-1" />
              Blog
            </li>
            <li className="flex items-center mr-10 my-4 p-2 cursor-pointer">
              <RiContactsFill className="mr-1" />
              About Us
            </li>
            <li className="flex items-center mr-10 p-2 my-4 cursor-pointer">
              <RiTeamLine className="mr-1" />
              Team
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-end m-2">
            <Link to="/wishlist" className="flex items-end">
              { state.itemsCounterFav ? <BsFillSuitHeartFill
                
                className="text-red-600 text-2xl lg:text-3xl"
              /> : <BsSuitHeart className="text-2xl lg:text-4xl sm:text-3xl md:text-3xl" />}
            
            </Link>
          </div>
          <div className="flex cursor-pointer items-end">
            <Link to="/cart">
              <IoBagHandleOutline className="mx-1 text-3xl lg:text-4xl sm:text-3xl md:text-3xl" />
            </Link>
            <span className="absolute lg:w-[16px] w-[14px] h-[14px] font-Nunito lg:h-[16px] lg:text-[12px] text-[10px] text-center bg-yellow-500 rounded-full">
              <p className="text-center">{state.itemsCounter}</p>
            </span>
          </div>
          <div className="lg:text-[16px] text-[14px] sm:flex md:flex lg:flex hidden items-center p-1 rounded-full lg:p-1">
            <button className="bg-black text-white p-1.5 lg:p-2.5 mr-2 rounded-full">
              Sign Up
            </button>
            <button className="text-black p-0.5 lg:p-1">Sign In</button>
          </div>
        </div>
      </div>
      <div className="border-yellow-500 border-b"></div>
    </>
  );
};

export default Navbar;
