import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" sx={{marginTop:3}}>
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
      </Container>
    </Box>
  );
};

export default MainContent;
