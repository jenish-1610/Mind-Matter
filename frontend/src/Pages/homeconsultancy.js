import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Style/homeconsultancy.css";
import booking from '../assets/how-it-works-booking.webp'
import counselor from '../assets/how-it-works-counselor.webp'
import chat from '../assets/how-it-works-chat.webp'
import reschedule from "../assets/how-it-works-reschedule.webp";
import arrow from "../assets/arrow.png"
import img from "../assets/have_questions_asset.webp"
import img3 from '../assets/asset 2.png'
import { Link } from "react-router-dom";
const homeconsultancy = () => {
  return (
    <div>
      <nav className='navigation'>
        <NavBar />
      </nav>

      <div className='homeconsultancy-first-flex'>
        <div className='first-section-heading'>
          Specialized help for your Mental Health
        </div>
        <div className='first-section-content-1'>
          <div className='first-section-content-box'>Anxity & Stress</div>
          <div className='first-section-content-box'>Depression</div>
          <div className='first-section-content-box'>Relationship Issues</div>
          <div className='first-section-content-box'>OCD</div>
          <div className='first-section-content-box'>Bipolar Disorder</div>
          <div className='first-section-content-box'>Psychosis</div>
        </div>
        <div className='first-section-content-2'>
          <div className='first-section-content-box'>Grief & Loss</div>
          <div className='first-section-content-box'>Trauma</div>
          <div className='first-section-content-box'>Couple Therapy</div>
          <div className='first-section-content-box'>LGBTQIA+</div>
          <div className='first-section-content-box'>ADHD & Teenage Issue</div>
          <div className='first-section-content-box'>Mental Disorder</div>
          <div className='first-section-content-box'>Sexual Issues</div>
        </div>

        <div className='home-consultancy-get-start-button'>
          <div className='get-started-button'>Lets Get Started</div>
        </div>
      </div>

      <div className='how-it-work-section'>
        <div className='how-it-work-title'>How it Works</div>

        <div className='underline-heading'>
          <div className='underline'></div>
        </div>

        <div className='how-it-work-step'>
          <div className='booking'>
            <img src={booking} className='image-size' />
            <p className='under-heading'>Book A Counselling Plan</p>
          </div>
          <div className='arrow-in-steps'>
            <img src={arrow} />
          </div>
          <div>
            <img src={counselor} className='image-size' />
            <p className='under-heading'>Choose A Counselor & Pick A Time</p>
          </div>
          <div className='arrow-in-steps'>
            <img src={arrow} />
          </div>
          <div>
            <img src={chat} className='image-size' />
            <p className='under-heading'>Join The Session & Chat Afterwards</p>
          </div>
          <div className='arrow-in-steps'>
            <img src={arrow} />
          </div>
          <div>
            <img src={reschedule} className='image-size' />
            <p className='under-heading'>
              Reschedule Or Change Counselor If Needed
            </p>
          </div>
        </div>
      </div>

      <div className='extra-section-heading-flex'>
        <h2>Let's Connect</h2>
        <p className='heading-line'></p>
      </div>

      <div className='extra-section'>
        <div className='extra-section-left'>
          <p className='first-question'>Have any Question?</p>
          <p className='second-question'>Mind Matters is here for you!</p>
          <p className='third-question'>
            Get help in choosing the right counselling therapist-specialization,
            preferred time and gender
          </p>
          <div className='extra-section-button'>Let's Start</div>
        </div>

        <div className='extra-section-right'>
          <img src={img} className='extra-section-right-img' />
        </div>
      </div>

      <div className='view-all-doctors-section'>
        <div className='view-all-doctors-section-left'>
          <Link to='/consultancy'><img src={img3}/></Link>
        </div>
        <div className='view-all-doctors-section-right'>
          <h2 className='view-all-doctors-section-right-heading'>
            Counselling Therapy Sessions With Licensed & Verified Experts
          </h2>

          <p className='view-all-doctors-section-right-content'>
            Highly qualified team of some of the best names in psychology who
            deliver improved well-being to you. Carefully vetted through a
            rigorous selection process. Trained and experienced in all
            psychotherapy techniques.
          </p>

          <div className="view-all-counselors-button">
            <Link to='/consultancy'>
              View All Counselors
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>


    </div>
  );
};

export default homeconsultancy;
