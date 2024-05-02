import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Typography } from "@mui/material";

const SliderSelect = () => {
  return (
    <>
      <Typography variant="h6" fontFamily={"initial"} fontStyle={"oblique"} fontWeight={"normal"} >
        Home Value
      </Typography>
      <SliderComponent min={10} max={60} defaultValue={3} step={5} onChange={(e, value) => console.log(value)} />

      <Typography variant="h5" fontFamily={"serif"} fontWeight={"bold"}> $1000 </Typography >
    </>
  )
}
export default SliderSelect;