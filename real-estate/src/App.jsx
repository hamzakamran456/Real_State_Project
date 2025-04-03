import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;
