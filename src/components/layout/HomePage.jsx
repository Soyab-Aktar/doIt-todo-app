import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="lg:w-9/12 md:w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default HomePage;
