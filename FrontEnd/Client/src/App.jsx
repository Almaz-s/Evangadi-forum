import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Components/About/About";
 
import HowItWorks from "./Pages/HowItWorks/HowItWorks"; // Make sure this is correctly imported

import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="/HowItWorks" element={<HowItWorks />} />{" "}
        {/* Add the closing tag */}

        <Route path="/SignIn" element={<SignIn />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
