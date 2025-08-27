import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white min-h-10 flex flex-col items-center justify-center p-8 gap-5">
      <button
        className="hover:cursor-pointer"
        onClick={() => navigate("/terms-conditions")}
      >
        Terms & Conditions
      </button>
      <button
        className="hover:cursor-pointer"
        onClick={() => navigate("/faqs")}
      >
        FAQs
      </button>
      <button className="hover:cursor-pointer" onClick={() => {}}>
        Privacy Policy
      </button>
    </footer>
  );
};

export default Footer;
