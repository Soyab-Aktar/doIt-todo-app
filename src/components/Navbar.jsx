import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#202127] shadow-sm">
      <nav className="navbar justify-between lg:w-9/12 md:w-11/12 mx-auto md:px-8 px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              className="menu menu-sm dropdown-content bg-[#202127] border border-gray-500/50 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#f04343]" : "hover:text-[#f04343]"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tasks"
                  className={({ isActive }) =>
                    isActive ? "text-[#f04343]" : "hover:text-[#f04343]"
                  }
                >
                  Tasks
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={`/`} className="text-3xl font-bold">
            Do<span className="text-[#f04343] ">IT</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#f04343] ${isActive ? "text-[#f04343]" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `hover:text-[#f04343] ${isActive ? "text-[#f04343]" : ""}`
                }
              >
                Tasks
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
