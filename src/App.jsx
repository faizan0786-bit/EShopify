import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import DarkMode from "./Components/Navbar/DarkMode.jsx";
import './App.css';
// import 'tailwindcss/tailwind.css';
import Hero from "./Components/Hero/Hero.jsx";
function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* fallback 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
      {/* <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <Banner />
      </div> */}
      {/* <Banner /> */}
    </>
  );
}

export default App;
