import React from "react";
import "../App.css";
import InavBar from "./InavBar";
import { Button } from "react-bootstrap";
import homeImage from "../assets/homeImage.jpg";
import aboutImage from "../assets/why us.jpg";
import guitar from "../assets/guitar.jpg";
import piano from "../assets/piano.jpg";
import 'bootstrap/dist/css/bootstrap.css';

import aptitude from "../assets/Aptitude.jpg";
import personalityDevelopment from "../assets/personal development.jpg";
import { ContactUs } from "./ContactUs";
import logo from "../assets/ks logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function MainPage(props) {
  return (
    <div className="bg-container">
      <InavBar />
      <div id="Home"
        className="home-bg-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="col-12 col-md-6 content-sec">
          <h1 className="home-heading">Unleash Potential with Fun Learning</h1>
          <p className="description">
            We create an engaging environment environment online, with the best tutors for
            beginners in Guitar, Aptitude and Reasoning, and Personality
            Development. Our courses are uniquely tailored to make learning fun.{" "}
          </p>
          <button className="button">Enroll Now</button>
        </div>
        <div
          className="col-12 col-md-6 image-column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={homeImage} className="homeImg" alt="allHandsImage" />
        </div>
        <div></div>
      </div>
      
      <div id="About"
        
      ><h1 className="common-heading green-color">About Us</h1>
      <div className="about-section text-center"
      style={{ display: "flex", alignItems: "center" }}>
                
        <div
          className="col-12 col-md-6 image-column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={aboutImage} className="aboutImg" alt="whyUsImage" />
        </div>
        <div className="col-12 col-md-6 content-sec">
          <h1 className="common-heading ">
            <span className="green-color">Why</span> Our Coaching Service
            Special
          </h1>
          <p className="description">
            <span className="founder-name">Koushik Shankar</span> Academy is
            best online Fun learning academy. Our institute provides best Tutors
            for beginners in Guitar. Learning and developing your Aptitude and
            Reasoning classes from Basic to Advanced level to develop and train
            your skills ready for clearing all Olympiads and competitive exams.
          </p>
        </div>
      </div>
      <div className="more-details ">
        <div className="col-12 col-md-5">
          <h1
            className="common-heading"
            style={{ fontSize: "35px", color: "white" }}
          >
            Empowering learners through engaging, Fun learning
          </h1>
        </div>
        <div className="col-12 col-md-6">
          <p className="description white-color">
            we believe in teaching concepts in a light-hearted, enjoyable
            manner,helping learners to understand and retain vital skills.
          </p>
          <div
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "space-around",
            }}
          >
            <div
              className="col-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                className="common-heading white-color"
                style={{ fontSize: "30px" }}
              >
                100
              </h1>
              <p className="description white-color">Tutors</p>
            </div>
            <div
              className="col-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                className="common-heading white-color"
                style={{ fontSize: "30px" }}
              >
                20
              </h1>
              <p className="description white-color">Happy Students</p>
            </div>
            <div
              className="col-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                className="common-heading white-color"
                style={{ fontSize: "30px" }}
              >
                200
              </h1>
              <p className="description white-color text-center">Min</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div id="Courses">
      <h1 className="common-heading text-center m-3">Courses We Offer</h1>
      <div className="course-details">
        <div className="col-12 col-md-6 content-sec">
          <h1 className="common-heading">
            Master the Strings with Expert Instructors Online
          </h1>
          <p className="description">
            Discover the art of guitar playing with our seasoned instructors.
            From chords to solos, our online platform provides a tailored
            learning experience, empowering you to navigate the fretboard with
            confidence.
          </p>
          <p className="description">Age : Above 8 years</p>
          <button className="button">Enroll Now</button>
        </div>
        <div
          className="col-12 col-md-5 image-column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={guitar} className="guitarImg" alt="guitarImage" />
        </div>
      </div>
      <div className="course-details">
        <div
          className="col-12 col-md-6 image-column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={piano} className="pianoImg" alt="guitarImage" />
        </div>
        <div className="col-12 col-md-6 content-sec">
          <h1 className="common-heading">
            Master Piano with Skilled Instructors Online{" "}
          </h1>
          <p className="description">
            Learn piano from experts who are passionate about sharing music
            knowledge. Join our courses and enjoy playing your favourite tunes
            in no time.
          </p>
          <p className="description">Age : Above 5 years</p>
          <button className="button">Start Learning</button>
        </div>
      </div>
      <div className="course-details">
        <div className="col-12 col-md-6 content-sec">
          <h1 className="common-heading">
            Boost your mind with Aptitude Classes{" "}
          </h1>
          <p className="description">
            Upscale your aptitude and reasoning skills with our comprehensive
            training, Designed to help you excel in all Olympiads and
            competitive exams
          </p>
          <p className="description">Age : Above 8 years</p>
          <button className="button">Join Today</button>
        </div>
        <div
          className="col-12 col-md-5 image-column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img src={aptitude} className="guitarImg" alt="guitarImage" />
        </div>
      </div>
      <div className="course-details">
        <div
          className="col-12 col-md-6 image-column"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={personalityDevelopment}
            className="pianoImg"
            alt="guitarImage"
          />
        </div>
        <div className="col-12 col-md-6 content-sec">
          <h1 className="common-heading">
            Transform with Personality Development Classes
          </h1>
          <p className="description">
            Uplift your personality and communication skills with our
            interactive classes. Enhance your presentation skills, voice and
            accent training, and develop your persona.
          </p>
          <p className="description">Age : Above 8 years</p>
          <button className="button">Start Learning</button>
        </div>
      </div>
      </div>
      <div className="more-details">
        <div className="col-12 col-md-4 text-center">
          <h1 className="common-heading white-color ">Fee Structure</h1>
          <p className="common-heading white-color ">(1:1) : 2000/mo</p>
          <p className="common-heading white-color ">Group : 1000/mo</p>
        </div>
      
        <div className="col-12 col-md-4 text-center">
          <h1 className="common-heading white-color ">Other Details</h1>
          <p className="common-heading white-color ">Mode : Online</p>
          <p className="common-heading white-color ">Duration : 60 Min</p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h1 className="common-heading white-color ">Payment Mode</h1>
          <p className="common-heading white-color ">Google Pay &</p>
          <p className="common-heading white-color ">Phone Pay</p>
        </div>
        
      </div>
      <div id="JoinUs" className="join-page text-center">
        <h1 className="common-heading white-color ">
          Join Our Exciting Learning Journey
        </h1>
        <p className="description white-color">
          Begin an exciting learning with us. Explore fun courses and transform
          your skills with our experts
        </p>
        <div
          style={{
            width: "30%",
          }}
        >
          <ContactUs />
        </div>
      </div>
      <div id="footer-section" className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row institute-contact-details"> 
            <div class="col-12 col-md-4 ">
              {/* <img className="logo" src={logo} alt="logo" /> */}
              <h1 className="common-heading" style={{ fontSize: "35px" }}>
                Koushik Shankar Fun Skills Hub
              </h1>
              <p className="description">
                Koushik Shankar Academy, the place for Fun and enjoyable
                learning.
              </p>
              <div className="social-icons-container">
                <div >
                  <FontAwesomeIcon class="social-icon" icon={faSquareFacebook} />
                </div>
                <div >
                  <FontAwesomeIcon class="social-icon" icon={faInstagramSquare} />
                </div>
                <div >
                  <FontAwesomeIcon class="social-icon" icon={faTwitterSquare} />
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3 text-center">
              <h1 className="common-heading" style={{ fontSize: "35px" }}>
                Contact Us</h1>
              <div className="contactIcon-detail-container">
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
              <p className="contact-description">akkinapallis2@gmail.com</p>
              </div>
              <div className="contactIcon-detail-container">
              <FontAwesomeIcon className="contact-icons" icon={faPhone} />
              <p className="contact-description">9618226250</p>
              </div>
              <div className="contactIcon-detail-container">
              <FontAwesomeIcon className="contact-icons" icon={faLocationDot} />
              <p className="contact-description">Visakhapatnam, Andhra Pradesh, 530017</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
