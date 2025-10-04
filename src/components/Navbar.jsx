import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#202127] shadow-sm">
      <nav className="navbar lg:w-9/12 md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={`/`}>Dashboard</Link>
              </li>
              <li>
                <Link to={`/tasks`}>Tasks</Link>
              </li>
              <li>
                <Link to={`/calender`}>Calender</Link>
              </li>
            </ul>
          </div>
          <span className="text-3xl font-bold">
            Do<span className="text-[#f04343] ">IT</span>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="hover:text-[#f04343]">
              <Link to={`/`}>Dashboard</Link>
            </li>
            <li className="hover:text-[#f04343]">
              <Link to={`/tasks`}>Tasks</Link>
            </li>
            <li className="hover:text-[#f04343]">
              <Link to={`/calender`}>Calender</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#f04343] rounded-md">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
