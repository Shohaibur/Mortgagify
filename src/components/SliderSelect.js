import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

const SliderSelect = ({ data, setData }) => {
  return (
    <>
      {/* <Stack spacing={1}>{(label = "Home Value")}</Stack> */}
      <Stack spacing={3.8} marginTop={7}>
        <SliderComponent
          label={"Home Value"}
          min={1000}
          max={10000}
          defaultValue={data.homeValue} //on slider
          value={data.homeValue}
          onChange={(e, value) =>
            setData({
              ...data,
              downPayment: value * 0.2,
              loanAmount: value * 0.8,
              homeValue: value,
            })
          } //state change
          step={100}
          unit={"$"}
          amount={data.homeValue}
        />
        <SliderComponent
          label={"Down Payment"}
          min={0}
          max={data.homeValue}
          defaultValue={data.downPayment}
          value={data.downPayment}
          step={100}
          onChange={(e, value) =>
            setData({
              ...data,
              loanAmount: data.homeValue - value,
              downPayment: value,
            })
          }
          unit={"$"}
          amount={data.downPayment}
        />
        <SliderComponent
          label={"Loan Amount"}
          min={0}
          max={data.homeValue}
          defaultValue={data.loanAmount}
          value={data.loanAmount}
          step={100}
          onChange={(e, value) =>
            setData({
              ...data,
              downPayment: data.homeValue - value,
              loanAmount: value,
            })
          }
          unit={"$"}
          amount={data.loanAmount}
        />
        <SliderComponent
          label={"Interest Rate"}
          min={2}
          max={17}
          defaultValue={data.interestRate}
          value={data.interestRate}
          step={0.5}
          onChange={(e, value) => setData({ ...data, interestRate: value })}
          unit={"%"}
          amount={data.interestRate}
        />
      </Stack>
    </>
  );
};
export default SliderSelect;
