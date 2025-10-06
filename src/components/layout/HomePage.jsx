import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Loader from "../pages/Loader";
import ScrollToTop from "../ScrollToTop";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const previousLocation = useRef(location);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Delay function that returns a Promise
    const delay = (milliseconds) => {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    };

    // Handle navigation with async/await and try-catch
    const handleNavigation = async () => {
      try {
        setIsLoading(true);
        await delay(1000);
        setIsLoading(false);
      } catch (error) {
        console.error("Navigation loading failed:", error);
        setIsLoading(false);
      }
    };

    // Effect to detect route changes
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (previousLocation.current.pathname !== location.pathname) {
      handleNavigation();
    }
    previousLocation.current = location;
  }, [location]);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1B1F] shadow-lg">
        <Navbar />
      </nav>
      <main className="lg:w-9/12 md:w-11/12 mx-auto mt-16 md:mt-12">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader />
            <ScrollToTop></ScrollToTop>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default HomePage;
