import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Container } from '@mui/material';

const CustomSlider = () => {
  return (

    <Container maxWidth="xl">
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Container>

  );
};

export default CustomSlider;