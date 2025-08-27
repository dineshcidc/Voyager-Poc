const ApplyNowOption = () => {
  return (
    <div className="w-full justify-end hidden md:flex">
      <div className="flex flex-col gap-4 p-4 bg-gradient-1-end/30 rounded-2xl border-gradient-1-end/30 border-1">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-bold text-lg">Get your Voyager Card</h1>
          <h1 className="text-sm">Fee Free. Zero extra mark-ups</h1>
        </div>
        <button className="rounded-xl px-3 py-2 hover:cursor-pointer bg-gradient-3 text-white capitalize">
          apply now
        </button>
      </div>
    </div>
  );
};

export default ApplyNowOption;
