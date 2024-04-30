import { Container, Typography, Box } from "@mui/material";
import React from "react";
import CustomSlider from "./common/Slider"; // Adjust the path based on your actual file structure

const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" sx={{ marginTop: 3 }}>
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ fontFamily: "sans-serif" }}
        >
          Home value
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ fontFamily: "sans-serif" }}
        >
          $1000
        </Typography>
        <CustomSlider />
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ fontFamily: "sans-serif" }}
        >
          Down Payment
        </Typography>
        
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ fontFamily: "sans-serif" }}
        >
          $2000
        </Typography>
      </Container>
    </Box>
  );
};

export default MainContent;
