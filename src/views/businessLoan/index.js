import { Box } from "@mui/material";
import React, { Fragment } from "react";
import BussinessLoanHomePage from '../businessLoan/homepage/index'
import WhyBussinessLoanSection from "./whyBussinessLoan";
import ChooseCredmudraLoan from "./chooseCredmudraLoanSection/index"
import FeatureBenefitSection from "./featureBenefitSection";
import InterestRateOnLoan from "./intrestRateOnLoan";
import EligiblityCriteriaSection from "./eligibilityCriteriaSection";
import DocumentRequiredSection from "./documentRequiredSection";
const BusinessLoan = () => {
  return (
   <Fragment>
     <BussinessLoanHomePage/>
     <WhyBussinessLoanSection/>
     <ChooseCredmudraLoan/>
     <FeatureBenefitSection/>
     <InterestRateOnLoan/>
     <EligiblityCriteriaSection/>
     <DocumentRequiredSection/>
   </Fragment>
  );
};

export default BusinessLoan;
