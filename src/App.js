import { Container, Grid } from "@mui/material";
import Navbar from "./components/common/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";

function App() {

  const [data, setData] = useState({
    homeValue: 1000 ,
    downPayment: 1000 * 0.2 ,
    loanAmount: 1000 * 0.8 ,
    interestRate:2

  })


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
