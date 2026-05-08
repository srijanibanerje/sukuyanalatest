import React from "react";
import Header from "./Components/Header"
import Banner from './Components/Banner'
import Footer from './Components/Footer'
 import Partners from "./Components/Partners";
import Tokenomics from "./Components/Tokenomics"
import Introduction from "./Components/Introduction"

 import Roadmap2 from "./Components/Roadmap2";
 import Burn from './Components/Burn';

 import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Header />} /> 
        </Routes>
      </Router>
      <Banner/>
      <Introduction /> 
      <Roadmap2 />
      <Tokenomics />
      <Burn/>
      <Partners/>
      <Footer />


    </>
  );
}

export default App;
