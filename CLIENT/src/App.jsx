import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <CustomNavbar />
      <Home />
      <Footer /> {/* Agregado correctamente el Footer */}
    </div>
  );
};

export default App;
