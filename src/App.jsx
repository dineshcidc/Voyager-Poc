import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import { Path } from "./components/path";
import OfferDetails from "./pages/OfferDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.HOME} element={<HomePage />} />
        <Route path={Path.OFFER_DETAILS} element={<OfferDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
