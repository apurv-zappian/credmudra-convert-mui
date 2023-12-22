import React, { useEffect, useRef } from "react";
import Slider from "@mui/material/Slider";
import { Typography, Button, Grid, Box, Container, Stack } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { init } from "echarts";
import "echarts";
// import { Pie } from 'react-chartjs-2';

const Process = () => {
  const [loanAmount, setLoanAmount] = React.useState(8225705);
  const [loanPeriod, setLoanPeriod] = React.useState(12);
  const [interestRate, setInterestRate] = React.useState(13);
  const [chartData, setChartData] = React.useState([
    { value: 0, name: "intrest" },
    { value: 0, name: "principal" },
  ]);
  const [principal, setprincipal] = React.useState(0);
  const [interest, setinterest] = React.useState(0);
  const [totalPaybal, settotalPaybal] = React.useState(0);

  const chartDom = useRef();
  let option = {};
  // useEffect =
  //   (() => {
  //     calculateIntrest();
  //   },
  //   [loanAmount, loanPeriod, interestRate]);

  const calculateIntrest = () => {
    const int = (loanAmount * loanPeriod * interestRate) / 100;
    setinterest(int);
  };

  const handleLoanAmountChange = (event, newValue) => {
    setLoanAmount(newValue);
  };

  const handleLoanPeriodChange = (event, newValue) => {
    setLoanPeriod(newValue);
  };

  const handleInterestRateChange = (event, newValue) => {
    setInterestRate(newValue);
  };

  const calculateEMI = () => {
    // Add your EMI calculation logic here
    // For demonstration, you can add a basic EMI calculation logic
    const principal = loanAmount;
    const rate = interestRate / 100 / 12;
    const time = loanPeriod * 12;
    const emi =
      (principal * rate * Math.pow(1 + rate, time)) /
      (Math.pow(1 + rate, time) - 1);
    return emi.toFixed(2);
  };

  const monthlyPayment = calculateEMI();

  const slidertextStyling = {
    fontSize: "17px",
    color: "#ffffff",
  };

  const sliderStyling = {
    color: "#5ab56b",
  };

  useEffect(() => {
    const chart = init(chartDom.current);
    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: chartData,
        },
      ],
    };
    chart.setOption(option);
  }, [chartData]);

  return (
    <Box
      sx={{ backgroundColor: "#10162c", marginTop: "6%", padding: "60px 0" }}
    >
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "28px", lg: "30px", xl: "32px" },
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: 1.2,
              margin: "23px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            The Process Is Pretty Time-Consuming, Isn't It?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px" },
              fontWeight: "900",
              color: "#ffffff",
              lineHeight: 1.2,
              margin: "23px 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Choose the faster, more accurate, and easier option – the personal
            loan EMI calculator online.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={12}
            lg={6}
            sx={{ background: "#1a2c34", maxWidth: "550px", padding: "50px" }}
          >
            <Box>
              {/* Loan Amount Slider */}
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...slidertextStyling }}>Amount</Typography>
                  <Typography sx={{ ...slidertextStyling }}>
                    {loanAmount} ₹
                  </Typography>
                </Box>
                <Slider
                  value={loanAmount}
                  min={0}
                  max={10000000}
                  onChange={handleLoanAmountChange}
                  valueLabelDisplay="auto"
                  sx={{ ...sliderStyling }}
                />
              </Box>
              {/* Loan Period Slider */}
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...slidertextStyling }}>Length</Typography>
                  <Typography sx={{ ...slidertextStyling }}>
                    {loanPeriod} years
                  </Typography>
                </Box>
                <Slider
                  value={loanPeriod}
                  min={1}
                  max={30}
                  onChange={handleLoanPeriodChange}
                  valueLabelDisplay="auto"
                  sx={{ ...sliderStyling }}
                />
              </Box>
              {/* Interest Rate Slider */}
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ ...slidertextStyling }}>
                    % Interest
                  </Typography>
                  <Typography sx={{ ...slidertextStyling }}>
                    {interestRate} %
                  </Typography>
                </Box>
                <Slider
                  value={interestRate}
                  min={1}
                  max={15}
                  onChange={handleInterestRateChange}
                  valueLabelDisplay="auto"
                  sx={{ ...sliderStyling }}
                />
              </Box>
              {/* Monthly Payment */}
              <Box>
                <Typography sx={{ fontSize: "18px", color: "#5ab56b" }}>
                  Monthly Payable:
                </Typography>
                <Typography sx={{ ...slidertextStyling }}>
                  {calculateEMI()} ₹/mo
                </Typography>
              </Box>
              {/* Apply Now Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#243788",
                      color: "#F7D64A",
                    },
                    padding: "14px 30px",
                    boxShadow: "0px 3px 6px #00000029",
                    borderRadius: "10px",
                    border: "1px solid #F7D64A",
                    backgroundColor: "#F7D64A",
                    color: "#243788",
                    marginLeft: { md: "8px" },
                    fontWeight: "900",
                    transition: ".4s all ease-in-out",
                    textTransform: "capitalize",
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* Pie Chart Section - Replace with appropriate MUI components */}

          <Grid item md={12} xs={6} lg={6}>
            {/* <Pie data={data}/> */}

            <Box
              ref={chartDom}
              sx={{
                width: "100%",
                height: "100%",
              }}
            ></Box>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              spacing={10}
              sx={{
                width: "100%",
              }}
            >
              <Box>
                <Box>jkfgh</Box>
                <Box>{loanAmount}</Box>
              </Box>
              <Box>
                <Box>dfvdsfv</Box>
                <Box>{interest}</Box>
              </Box>
              <Box>
                <Box>sfvsd</Box>
                <Box>{totalPaybal}</Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Process;
