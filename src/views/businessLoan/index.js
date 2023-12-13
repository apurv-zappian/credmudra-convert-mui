import { Box } from "@mui/material";
import React, { Fragment } from "react";
import BussinessLoanHomePage from '../businessLoan/homepage/index'
import WhyBussinessLoanSection from "./whyBussinessLoan";
import ChooseCredmudraLoan from "./chooseCredmudraLoanSection/index"
const BusinessLoan = () => {
  return (
   <Fragment>
     <BussinessLoanHomePage/>
     <WhyBussinessLoanSection/>
     <ChooseCredmudraLoan/>
   </Fragment>
  );
};

export default BusinessLoan;
