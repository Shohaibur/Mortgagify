import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              color="aqua"
              sx={{ flexGrow: 1, fontFamily: "-apple-system", fontWeight: 40 }}
            >
              Mortgagify
            </Typography>
            <Button color="inherit" sx={{ fontFamily: "a", fontWeight: 40 }}>
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      
    </Box>
  );
};

export default Navbar;
