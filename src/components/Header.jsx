import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-white h-10 rounded-full flex items-center p-8 justify-between">
      <div className="flex gap-5">
        <button
          className="hover:cursor-pointer hover:underline uppercase"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="hover:cursor-pointer hover:underline uppercase"
          onClick={() => navigate("/offer")}
        >
          Offer
        </button>
        <button
          className="hover:cursor-pointer hover:underline uppercase"
          onClick={() => navigate("/blog")}
        >
          Blog
        </button>
      </div>

      <button className="rounded-2xl px-4 py-1 hover:cursor-pointer bg-gradient-3 text-white uppercase">
        apply now
      </button>
    </header>
  );
};

export default Header;
