import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import BusinessLoan from "./views/businessLoan";
import PersonalLoan from "./views/personalLoan";
import PersonalLoanForDebt from "./views/PersonalLoanForDebt";
import PersonalLoanForMedical from "./views/PersonalLoanForMedical";
import PersonalLoanForTravel from "./views/PersonalLoanForTravel";
import CredmudraPage from "./views/credmudraPage";
import CreditScore from "./views/creditScore";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<CredmudraPage />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/personalloanfordebt"
              element={<PersonalLoanForDebt />}
            />
            <Route
              path="/personalloanformedical"
              element={<PersonalLoanForMedical />}
            />
            <Route
              path="/personalloanfortravel"
              element={<PersonalLoanForTravel />}
            />
            <Route
              path="/credit-score"
              element={<CreditScore />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
