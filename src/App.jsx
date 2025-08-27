import { BrowserRouter, Route, Routes } from "react-router-dom";

import FaqPage from "./pages/FaqPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/Homepage";
import OfferPage from "./pages/OfferPage";
import BlogDetails from "./pages/BlogDetails";
import OfferDetails from "./pages/OfferDetails";
import PageNotFound from "./pages/PageNotFound";
import TermsConditions from "./pages/TermsConditions";

import Layout from "./components/Layout";
import { UrlPath } from "./constants/UrlPath";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={UrlPath.HOME} element={<HomePage />} />
          <Route path={UrlPath.OFFER} element={<OfferPage />} />
          <Route path={UrlPath.OFFER_DETAILS} element={<OfferDetails />} />
          <Route path={UrlPath.BLOG} element={<BlogPage />} />
          <Route path={UrlPath.BLOG_DETAILS} element={<BlogDetails />} />
          <Route
            path={UrlPath.TERMS_CONDITIONS}
            element={<TermsConditions />}
          />
          <Route path={UrlPath.FAQS} element={<FaqPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
