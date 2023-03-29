import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Section from "../Components/Section";
import img1 from "../assets/asset 18.png";
import img3 from "../assets/asset 2.png";
import img2 from "../assets/asset 21.png";
import "../Style/home.css";
import { Link } from "react-router-dom";

import img from "../assets/mind.jpg";


const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="big-features-section0">
          <h1 >Clear your Mind with Us</h1>
        </section>
        
        <section className='big-features-section1'>
          <Link to='/journal'>
            <div className='big-features-section1-left'>
              <img src={img1} />
            </div>
          </Link>
          <div className='big-features-section1-right'>
            {/* <p>Maintain Journal</p> */}
            <h1>Journaling</h1>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intuitive and delightful experiences for your users.
            </p>

            <p className='big-features-section1-right-background'>
              The navigation test is god's gift to UI designers, it probably has
              the best power-to-simplicity ratio of any software, ever.
            </p>

            <p className='journal-button'>
              <Link to='/journal'>Start Journalling</Link>
            </p>
          </div>
        </section>

        <section className='big-features-section2'>
          <div className='big-features-section2-left'>
            <h1 className='big-features-section2-heading'>
              Register Yourself as Doctor
            </h1>

            <p className='doctor-thought'>
              Physicians do a lot for a patient when they give his disease a
              name.
            </p>
            <p>
              Click the Below Button to Register your self as the Doctor Through
              our platform
            </p>
            <p className='register-button'>
              <Link to='/therapist_signup'>Register as Doc</Link>
            </p>
          </div>
          <div className='big-features-section2-right'>
            <Link to='/therapist_Signup'>
              <img src={img2} className='big-features-section2-right-img' />
            </Link>
          </div>
        </section>

        <section className='heading-consultancy'>
          <h1>Choose Help. Not Suffering.</h1>
        </section>

        <section className='consultancy-section'>
          <div className='consultancy-section-left'>
            <Link to='/consultancy'>
              <img className='consultancy-section-left-img' src={img3} />
            </Link>
          </div>
          <div className='consultancy-section-right'>
            <h2 className='consultancy-section-right-heading'>
              Counselling Therapy Sessions With Licensed & Verified Experts
            </h2>
            <p>
              Highly qualified team of some of the best names in psychology who
              deliver improved well-being to you. Carefully vetted through a
              rigorous selection process. Trained and experienced in all
              psychotherapy techniques.
            </p>

            <p className='consultancy-button'>
              <Link to='/consultancy'>View all Counselors</Link>
            </p>
          </div>
        </section>

        <section className='heading-article'>
          <h1>Because Mind Matters.</h1>
        </section>

        <section className='article-section'>
          <Link to='#' className='example-card1'>
            <h3 className='card-text'>
              Anxiety is a thin stream of fear trickling through the mind.
            </h3>
          </Link>
          <Link to='#' className='example-card2'>
            <h3 className='card-text'>
              Depression is like a bruise that never goes away. A bruise in your
              mind.It's always here, though
            </h3>
          </Link>
          <Link to='#' className='example-card3'>
            <h3 className='card-text'>
              Happiness is when what you think, what you say, and what you do
              are in harmony.
            </h3>
          </Link>
          <Link to='#' className='example-card4'>
            <h3 className='card-text'>
              Happiness can be found even in the darkest of times, if one only
              remembers to turn on the light.
            </h3>
          </Link>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
