import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Stack } from "@mui/material";

const SliderSelect = ({ label, unit }) => {
  return (
    <>
      {/* <Stack spacing={1}>{(label = "Home Value")}</Stack> */}
      <Stack spacing={3.8} marginTop={7}>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={1000}
        step={100}
        onChange={(e, value) => console.log(value)}
        unit={"$"}
        label={"Home Value"}
        amount={12}
      />

      <SliderComponent
        min={0}
        max={5000}
        defaultValue={0}
        step={100}
        onChange={(e, value) => console.log(value)}
        unit={"$"}
        label={"Down Payment"}
        amount={12}
      />

      <SliderComponent
        min={0}
        max={5000}
        defaultValue={10}
        step={100}
        onChange={(e, value) => console.log(value)}
        unit={"$"}
        label={"Loan Amount"}
        amount={12}
      />
      </Stack>
    </>
  );
};
export default SliderSelect;
