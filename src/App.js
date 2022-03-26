import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Companies from "./components/Companies/Companies";
import CompanyType from "./components/CompanyType/CompanyType";
import companyTypes from "./db/db";
import About from "./views/about";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyType types={companyTypes} />} />
        <Route path="/" element={<About />} />
        <Route
          path="/dream"
          element={<Companies companies={companyTypes[0]} />}
        />
        <Route
          path="/big"
          element={<Companies companies={companyTypes[1]} />}
        />
        <Route
          path="/fintech"
          element={<Companies companies={companyTypes[2]} />}
        />
        <Route
          path="/unicorns"
          element={<Companies companies={companyTypes[3]} />}
        />
        <Route
          path="/startups"
          element={<Companies companies={companyTypes[4]} />}
        />
        <Route
          path="/fintech-startups"
          element={<Companies companies={companyTypes[5]} />}
        />
        <Route
          path="/sass"
          element={<Companies companies={companyTypes[6]} />}
        />
        <Route
          path="/edtech"
          element={<Companies companies={companyTypes[7]} />}
        />
        <Route
          path="/ecommerce"
          element={<Companies companies={companyTypes[8]} />}
        />
        <Route
          path="/others"
          element={<Companies companies={companyTypes[9]} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
