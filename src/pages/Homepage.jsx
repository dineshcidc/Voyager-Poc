import FaqContent from "../components/FaqContent";

const HomePage = () => {
  return (
    <div className="text-success-gradient-start z-10 text-black">
      <div className="flex flex-col items-center gap-10">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold capitalize text-center">
            frequently asked questions
          </h1>
          <h2 className="text-xs md:text-xl mt-3 text-center">
            Learn more about how the Wizz Voyager Card works
          </h2>
        </div>

        <FaqContent />
      </div>
    </div>
  );
};

export default HomePage;
