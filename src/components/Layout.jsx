import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import { ImagesPath } from "../assets/ImagesPath";

const bgImages = [
  ImagesPath.BG_IMAGE_1,
  ImagesPath.BG_IMAGE_2,
  ImagesPath.BG_IMAGE_3,
];

const Layout = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Duration for each transition, adjust for speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {bgImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Background ${idx + 1}`}
          className={`absolute inset-0 w-full h-96 object-cover transition-opacity duration-5000 ease-in-out ${
            activeIndex === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: idx }}
        />
      ))}
      <div className="relative flex-1 flex flex-col gap-4 px-15 py-7.5 bg-amber-300">
        <Header />
        <div className="z-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
