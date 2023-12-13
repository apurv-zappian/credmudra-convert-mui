import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./layout";
import BusinessLoan from "./views/businessLoan";
import PersonalLoan from "./views/personalLoan";
import CredMudraPage from "./views/credMudraPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" index element={<CredMudraPage />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
