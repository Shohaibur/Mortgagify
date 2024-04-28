import { Container, Slider } from "@mui/material";
import Navbar from "./components/common/Navbar";
import MainContent from "./components/MainContent";


function App() {
  return (
    
    <div className="App">
     <Navbar/>
     <MainContent/>
     <Container maxWidth="xl">
     <Slider/>
     </Container>
    </div>
    
  );
}

export default App;
