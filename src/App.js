import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Characters from "./pages/characters/Characters";
import Episodes from "./pages/episodes/Episodes";
import Location from "./pages/locations/Locations";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Characters' element={<Characters />} />
          <Route path='/Episodes' element={<Episodes />} />
          <Route path='/Locations' element={<Location />} />
          <Route path='/Contact Us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
