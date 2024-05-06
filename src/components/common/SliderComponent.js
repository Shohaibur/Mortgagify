import React from "react";
import { Slider, Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={.3} >
      <Typography
        variant="h7"
        fontFamily={"sans"}
        fontStyle={"oblique"}
        fontWeight={"normal"}
      >
        {label}
      </Typography>
      
      <Typography fontStyle={"normal"} variant={"h5"} >
        {unit} {amount}
      </Typography>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        marks
        aria-label="Default"
        valueLabelDisplay="auto"
      />

      <Stack direction={"row"} justifyContent="space-between">
        <Typography
          variant="caption"
          fontFamily={"serif"}
          fontWeight={"normal"}
          color={"text.secondary"}
        >
          {unit} {min}
        </Typography>
        <Typography
          variant="caption"
          fontFamily={"serif"}
          fontWeight={"normal"}
          color={"text.secondary"}
        >
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
    
  );
};

export default SliderComponent;
