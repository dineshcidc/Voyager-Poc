import { useNavigate } from "react-router-dom";

import { ImagesPath } from "../assets/ImagesPath";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed h-full w-full left-0 top-0">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex h-screen flex-col">
          <div className="m-auto text-center">
            <img src={ImagesPath.PAGE_NOT_FOUND} alt="" className="mb-8" />
            <p className="text-3xl font-medium mb-4">Oops! Page Not Found</p>
            <p>
              Sorry, the page you're looking<br></br>for doesn't exist
            </p>
            <button
              className="text-xs md:text-base bg-gradient-3 rounded-xl px-3 py-2 font-bold text-white w-fit hover:cursor-pointer mt-8"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
