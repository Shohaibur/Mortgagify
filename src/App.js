import { Container, Slider, Grid } from "@mui/material";
import Navbar from "./components/common/Navbar";
import MainContent from "./components/MainContent";
import Result from "./components/Result";


function App() {
  return (
    // <div className="App">
    //  <Navbar/>
    //  <MainContent/>
    //  <Container maxWidth="xl"  >
    //  <Slider/>
    //  </Container>
    // </div>

    <div className="App">
      <Navbar />
      
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Container maxWidth="xs" >
          <MainContent />
      <Slider />
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <Result />
        </Grid>
      </Grid>

    </div>

  );
}

export default App;
