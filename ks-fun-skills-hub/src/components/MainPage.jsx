import React from "react";
import "../App.css";
import InavBar from "./InavBar";
import { Button } from "react-bootstrap";
import homeImage from "../assets/homeImage.jpg";
import aboutImage from "../assets/why us.jpg";
import guitar from "../assets/guitar.jpg";
import piano from "../assets/piano.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";

import aptitude from "../assets/Aptitude.jpg";
import personalityDevelopment from "../assets/personal development.jpg";
import { ContactUs } from "./ContactUs";
import logo from "../assets/ks logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function MainPage(props){
    const scrollToJoinUs = () => {
        const joinUsSection = document.getElementById("JoinUs");
        if (joinUsSection) {
          joinUsSection.scrollIntoView({ behavior: "smooth" });
        }
    }
  return (
    <div className="bg-container">
      <InavBar />
      <Container id="Home" className="home-bg-container" fluid>
                <Row>
                    <Col lg={6} md={12} xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                    <div className="content-sec">
                        <h1 className="home-heading">
                            Unleash Potential with Fun Learning
                        </h1>
                        <p className="description">
                            We create an engaging environment online, with the best tutors
                            for beginners in Guitar, Aptitude and Reasoning, and Personality
                            Development. Our courses are uniquely tailored to make learning
                            fun.{" "}
                        </p>
                        <div className="button-container">
                        <button onClick={scrollToJoinUs} className="button">Enroll Now</button>
                        </div>
                    </div>
                    </Col>
                    <Col className="image-column" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center" }} >
                        <img src={homeImage} className="homeImg" alt="allHandsImage" />
                    </Col>
                </Row>
            </Container>
            <Container id="About" className="about-section" fluid>
                <Row>
                    <h1 className="common-heading green-color">About Us</h1>
                    <Col className="image-column" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent:"center" ,alignItems: "center" }}>
                        <img src={aboutImage} className="aboutImg" alt="whyUsImage" />
                    </Col>
                    <Col className="content-sec" lg={6} md={12} xs={12} style={{ display: "flex",flexDirection:"column", justifyContent: "center" }} >
                        <h1 className="common-heading ">
                        <span className="green-color">Why</span> Our Coaching Service Special
                        </h1>
                        <p className="description"><span className="founder-name">Koushik Shankar</span> Academy stands as the premier online fun learning hub, 
                        offering expert guitar tutors for beginners and in-depth Aptitude and Reasoning classes. 
                        Founded by CEO <span className="founder-name">Akkinapalli Mrudula,</span> an experienced engineer with a teaching background since 2005,
                         and co-founder <span className="founder-name">Sudharani,</span> our academy is dedicated to preparing students for academic success and
                          competitive exams. Join us for a vibrant learning experience that sets the stage for clearing Olympiads
                           and mastering new skills.
                        </p>
                    </Col>
                    </Row>
            </Container>
            <Container className="more-details" fluid>
                       <Row style={{display:"flex",justifyContent:"center"}}>
                            <Col style={{display: "flex", justifyContent:"center" ,alignItems: "center"  }} xs={12} lg={5} md={12}>
                                <h1 className="common-heading" style={{ fontSize: "35px", color: "white" }} >
                                    Empowering learners through engaging, Fun learning
                                </h1>
                                </Col>
                            <Col xs={12} lg={6} md={12}>
                                <p className="description white-color">
                                    we believe in teaching concepts in a light-hearted, enjoyable
                                    manner,helping learners to understand and retain vital skills.
                                </p>
                                <div style={{display:"flex"}}>
                                    <div  style={{ width:"100px", display: "flex", flexDirection: "column", alignItems: "center", }}>
                                        <h1 className="common-heading white-color" style={{ fontSize: "30px" }} >20</h1>
                                        <p className="description text-center white-color">Tutors</p>
                                    </div>
                                    <div style={{width:"200px", display: "flex", flexDirection: "column", alignItems: "center", }}>
                                        <h1 className="common-heading white-color" style={{ fontSize: "30px" }} >100</h1>
                                        <p className="description white-color text-center">Happy Students</p>
                                    </div>
                                    <div style={{width:"100px", display: "flex", flexDirection: "column", alignItems: "center", }}>
                                        <h1 className="common-heading white-color" style={{ fontSize: "30px" }} >60</h1>
                                        <p className="description white-color text-center">Min</p>
                                    </div>
                                </div>
                                
                            </Col>
                       </Row>
                    </Container>
                    <Container  id="Courses" className="course-details" fluid xs={12} >
                    <Row style={{margin:"0px"}} className="course-details">
                        <h1 className="common-heading text-center m-3">Courses We Offer</h1>
                        <Col className="image-column d-md-none d-sm-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={guitar} className="guitarImg" alt="guitarImage" />
                        </Col>
                        <Col className="content-sec" lg={6} md={12} xs={12}>
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
                            <div className="button-container">
                            <button onClick={scrollToJoinUs} className="button">Enroll Now</button>
                            </div>
                        </Col>
                        <Col className="image-column d-none d-lg-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div className="image-container">
                        <img src={guitar} className="guitarImg" alt="guitarImage" />

                        </div>
                        {/* <img src={guitar} className="guitarImg" alt="guitarImage" /> */}
                    </Col>
                    
                    </Row> 
                </Container> 
                <Container className="course-details" fluid xs={12}>
                    <Row>
                        <Col className="image-column d-md-none d-sm-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={piano} className="pianoImg" alt="guitarImage" />
                        </Col>
                        
                        <Col className="image-column d-none d-lg-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div className="image-container">
                        <img src={piano} className="pianoImg" alt="guitarImage" />

                        </div>
                        </Col>
                        <Col className="content-sec" lg={6} md={12} xs={12}>
                            <h1 className="common-heading">
                            Master Piano with Skilled Instructors Online{" "}
                            </h1>
                            <p className="description">
                            Learn piano from experts who are passionate about sharing music
                            knowledge. Join our courses and enjoy playing your favourite tunes
                            in no time.
                            </p>
                            <p className="description">Age : Above 5 years</p>
                            <div className="button-container">
                            <button onClick={scrollToJoinUs} className="button">Start Learning</button>
                            </div>
                        </Col>
                    </Row> 
                </Container> 
                <Container className="course-details" fluid xs={12}>
                    <Row>
                        <Col className="image-column d-md-none d-sm-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={aptitude} className="pianoImg" alt="guitarImage" />
                        </Col>
                        <Col className="content-sec" lg={6} md={12} xs={12}>
                            <h1 className="common-heading">
                            Boost your mind with Aptitude Classes{" "}                            </h1>
                            <p className="description">
                            Upscale your aptitude and reasoning skills with our comprehensive
                            training, Designed to help you excel in all Olympiads and
                            competitive exams
                            </p>
                            <p className="description">Age : Above 8 years</p>
                            <div className="button-container">
                            <button onClick={scrollToJoinUs} className="button">Join Today</button>
                            </div>
                        </Col>
                        <Col className="image-column d-none d-lg-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div className="image-container">
                        <img src={aptitude} className="pianoImg" alt="guitarImage" />

                        </div>
                        </Col>
                    </Row> 
                </Container>
                <Container className="course-details" fluid xs={12}>
                    <Row>
                        <Col className="image-column d-md-none d-sm-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={personalityDevelopment} className="pianoImg" alt="guitarImage" />
                        </Col>
                        
                        <Col className="image-column d-none d-lg-block" lg={6} md={12} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div className="image-container">
                        <img src={personalityDevelopment} className="pianoImg" alt="guitarImage" />

                        </div>
                        </Col>
                        <Col className="content-sec" lg={6} md={11} xs={12}>
                            <h1 className="common-heading">
                            Transform with Personality Development Classes
                            </h1>
                            <p className="description">
                            Uplift your personality and communication skills with our
                            interactive classes. Enhance your presentation skills, voice and
                            accent training, and develop your persona.
                            </p>
                            <p className="description">Age : Above 8 years</p>
                            <div className="button-container">
                            <button onClick={scrollToJoinUs} className="button">Start Learning</button>
                            </div>
                        </Col>
                    </Row> 
                </Container> 
                <Container className="more-details" fluid xs={12}>
                    <Row style={{display:"flex", justifyContent:"space-around"}}>
                        <Col lg={6} md={12} xs={12}>
                            <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                                <h1 style={{fontSize:"40px"}} className="common-heading white-color ">Fee Structure</h1>
                                <p className="other-detail-desc">(1:1) : 2000/mo</p>
                                <p className="other-detail-desc">Group : 1000/mo</p>
                                <p className="other-detail-desc">Payment Mode : Gpay / Phonepay</p>
                            </div>
                            
                        </Col>
                        <Col lg={6} md={12} xs={12}>
                        <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                            <h1  style={{fontSize:"40px"}} className="common-heading white-color ">Other Details</h1>
                            <p  className="other-detail-desc ">Mode : Online</p>
                            <p  className="other-detail-desc">Duration : 60 Min</p>
                            <p  className="other-detail-desc">No of Classes : 8-10 / mo</p>

                        </div>
                        </Col>
                    </Row>
                </Container>
                <Container id="JoinUs" className="join-page text-center"  fluid>
                    <h1 className="common-heading white-color ">
                    Join Our Exciting Learning Journey
                    </h1>
                    <p className="description white-color">
                    Begin an exciting learning with us. Explore fun courses and transform
                    your skills with our experts
                    </p>
                    <div className="contact-form" >
                    <ContactUs />
                    </div>
                </Container>
                <Container id="contactUs" fluid xs={12}>
                    <Row className="footer-section pt-5 pb-5">
                        <Col lg={4} md={12} xs={12}>
                            <h1 className="common-heading" style={{ fontSize: "35px" }}>
                                Koushik Shankar Fun Skills Hub
                            </h1>
                            <p className="description">
                                Koushik Shankar Academy, the place for Fun and enjoyable
                                learning.
                            </p>
                                                        <div className="social-icons-container">
                                <div>
                                <FontAwesomeIcon
                                    class="social-icon"
                                    icon={faSquareFacebook}
                                />
                                </div>
                                <div>
                                <a href="https://www.instagram.com/ksfun_skillshub?igsh=MTNnY2tuOGpqOHZsYg==" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        className="social-icon"
                                        icon={faInstagramSquare}
                                    />
                                </a>
                                </div>
                                <div>
                                <FontAwesomeIcon class="social-icon" icon={faTwitterSquare} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12} xs={12}>
                            <h1 className="common-heading" style={{ fontSize: "35px" }}>
                            Contact Us
                            </h1>
                            <div className="contactIcon-detail-container">
                                <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
                                <p className="contact-description">mrudula.ksfunskillshub.com</p>
                            </div>
                            <div className="contactIcon-detail-container">
                                <FontAwesomeIcon className="contact-icons" icon={faPhone} />
                                <p className="contact-description">9618226250</p>
                            </div>
                            <div className="contactIcon-detail-container">
                                <FontAwesomeIcon
                                className="contact-icons"
                                icon={faLocationDot}
                                />
                                <p className="contact-description">
                                Visakhapatnam, Andhra Pradesh, 530017
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
    </div>
  )
};

