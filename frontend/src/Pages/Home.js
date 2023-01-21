import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Section from "../Components/Section";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Section />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
