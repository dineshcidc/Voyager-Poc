import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import Layout from "./components/Layout";
import OfferPage from "./pages/OfferPage";
import { UrlPath } from "./constants/path";
import OfferDetails from "./pages/OfferDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={UrlPath.HOME} element={<HomePage />} />
          <Route path={UrlPath.OFFER} element={<OfferPage />} />
          <Route path={UrlPath.OFFER_DETAILS} element={<OfferDetails />} />
          <Route path={UrlPath.BLOG} element={<BlogPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
