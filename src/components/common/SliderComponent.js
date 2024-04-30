import React from "react";
import { Slider } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max,step,onChange,value }) => {
  return (

    <Slider defaultValue={defaultValue} min={min} max={max} step={step}
    onChange={onChange}
    value={value}
    marks aria-label="Default" valueLabelDisplay="auto" />

  )
}

export default SliderComponent