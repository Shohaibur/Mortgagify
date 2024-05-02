import { Container, Grid } from "@mui/material";
import Navbar from "./components/common/Navbar";
// import MainContent from "./components/MainContent";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
//import CustomSlider from "./components/Slider";


function App() {
    return (
      <div className="App">
        <Navbar />
        <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid container spacing={5} >
          <Grid item xs={12} md={6}>
            <SliderSelect/>
            <TenureSelect/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result/>
          </Grid>
          </Grid>

        </Container>

      </div>
    );
}

export default App;
