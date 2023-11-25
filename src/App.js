import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Track from "./components/Track";
import CreateReport from "./components/CreateReport";
import AppScreenShots from "./components/AppScreenShots";
import Footer from "./components/Footer";
import SupportForm from "./components/SupportForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Track />
      <CreateReport />
      <AppScreenShots />
      <SupportForm />
      <Footer />
     </div>
  );
}

export default App;
