import "./App.css";
import "../src/assets/css/custom.css";
import "../src/assets/css/templatemo.css";
import "../src/assets/css/bootstrap.min.css";
import Foother from "./pages/foother";
import About from "./pages/About";
import Navbar from "./pages/navbar";
import { Routes, Route } from "react-router-dom";
import BobyHome from "./pages/bobyHome";
import Contact from "./pages/Contact";
import Shop from "./pages/shop";
// import Getapi from "./componnet/getapi";
// import Testfunction from "./componnet/testfun";
import Singleproduct from "./pages/single_product";
import Testapi from "./pages/testapi";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Testapi />
      {/* <Getapi /> */}
      {/* <Testfunction /> */}
      <Routes>
        <Route path="/shop-single/:id" element={<Singleproduct />} />
        <Route path="/" exact element={<BobyHome />} />
        <Route path="/store" exact element={<Shop />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
      </Routes>

      <Foother />
    </div>
  );
}

export default App;
