import { useEffect, useState } from "react";

import { ImagesPath } from "../assets/ImagesPath";

const bgImages = [
  ImagesPath.BG_IMAGE_1,
  ImagesPath.BG_IMAGE_2,
  ImagesPath.BG_IMAGE_3,
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Duration for each transition, adjust for speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-4">
      {bgImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Background ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
            activeIndex === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: idx }}
        />
      ))}

      <div className="text-success-gradient-start">Inprogress</div>
    </div>
  );
};

export default HomePage;
