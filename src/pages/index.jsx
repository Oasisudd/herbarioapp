import Layout from "./Layout.jsx";
import Landing from "./Landing";
import Catalog from "./Catalog";
import SpeciesDetail from "./SpeciesDetail";

import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
  Landing: Landing,
  Catalog: Catalog,
  SpeciesDetail: SpeciesDetail,
};

function _getCurrentPage(url) {
  if (url.endsWith('/')) {
    url = url.slice(0, -1);
  }
  let urlLastPart = url.split('/').pop();
  if (urlLastPart.includes('?')) {
    urlLastPart = urlLastPart.split('?')[0];
  }

  const pageName = Object.keys(PAGES).find(
    page => page.toLowerCase() === urlLastPart.toLowerCase()
  );
  return pageName || Object.keys(PAGES)[0];
}

function PagesContent() {
  const location = useLocation();
  const currentPage = _getCurrentPage(location.pathname);

  return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/SpeciesDetail" element={<SpeciesDetail />} />
      </Routes>
    </Layout>
  );
}

export default function Pages() {
  return (
    <Router>
      <PagesContent />
    </Router>
  );
}
