const ViewMoreBtn = ({ label, onClick }) => {
  return (
    <div className="flex self-center bg-gradient-3 w-fit p-0.5 rounded-xl">
      <button
        className="text-xs md:text-sm font-bold px-3 py-2 bg-gray-deepest overflow-hidden rounded-xl hover:cursor-pointer"
        onClick={() => onClick()}
      >
        {label}
      </button>
    </div>
  );
};

export default ViewMoreBtn;
