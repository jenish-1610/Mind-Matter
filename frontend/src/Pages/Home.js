import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Section from "../Components/Section";
import img1 from '../assets/asset 18.png'
import img3 from '../assets/asset 35.svg'
import '../Style/home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        
        <section className="big-features-section1 flex container">
          <Link to='/journal'>
          <div className="big-features-section1-left">
            <img src={img1} />
          </div>
          </Link>
          <div className="big-features-section1-right flex">
            {/* <p>Maintain Journal</p> */}
            <h2>Journal</h2>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful
                experiences for your users.</p>

            <p className="big-features-section1-right-background">The navigation test is god's gift to UI designers, it
              probably has the best power-to-simplicity ratio of any software, ever.</p>

          </div>
    </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
