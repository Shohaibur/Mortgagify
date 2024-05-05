import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

const SliderSelect = ({ data, setData }) => {
  return (
    <>
      {/* <Stack spacing={1}>{(label = "Home Value")}</Stack> */}
      <Stack spacing={3.8} marginTop={7}>
        <SliderComponent
          min={1000}
          max={10000}
          defaultValue={data.homeValue} //on slider
          value={data.homeValue}
          onChange={(e, value) => setData({ ...data, homeValue: value })} //state change
          step={100}
          unit={"$"}
          label={"Home Value"}
          amount={data.homeValue}
        />

        <SliderComponent
          min={0}
          max={5000}
          defaultValue={data.downPayment}
          value={data.downPayment}
          step={100}
          onChange={(e, value) => setData({ ...data, downPayment: value })}
          unit={"$"}
          label={"Down Payment"}
          amount={data.downPayment}
        />

        <SliderComponent
          min={0}
          max={5000}
          defaultValue={data.loanAmount}
          value={data.loanAmount}
          step={100}
          onChange={(e, value) => setData({ ...data, loanAmount: value })}
          unit={"$"}
          label={"Loan Amount"}
          amount={data.loanAmount}
        />

        <SliderComponent
          min={2}
          max={17}
          defaultValue={data.interestRate}
          value={data.interestRate}
          step={.5}
          onChange={(e, value) => setData({ ...data, interestRate: value })}
          unit={"%"}
          label={"Interest Rate"}
          amount={data.interestRate}
        />
      </Stack>
    </>
  );
};
export default SliderSelect;
