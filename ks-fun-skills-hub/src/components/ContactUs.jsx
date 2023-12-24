import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jezzcov', 'template_w0i1l97', form.current, 'j44EIt9khAbkkwcUU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="from_name" />
    //   <label>Email</label>
    //   <input type="email" name="from_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    //<label>Tejaswi text</label> 
     <form ref={form} onSubmit={sendEmail}> 
            <div
              className="mb-2 form-item"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Form.Control
                style={{ marginRight: "10px" }}
                type="firstName"
                placeholder="First Name"
              />
              <Form.Control type="firstName" name="from_name" placeholder="Last Name" />
            </div>
            <Form.Control
              className="mb-2 form-item"
              type="email"
              name="from_email"
              placeholder="Enter email"
            />
            <Form.Control
              className="mb-2 form-item"
              type="mobilenumber"
              placeholder="Enter mobile number"
            />
            <Form.Control
              className="mb-2 form-item"
              type="course"
              placeholder="Enter course name"
            />
            <Form.Control
            className="mb-2 form-item"
            type="slot"
            name="message"
            placeholder="Required slot (ex 1pm - 2pm)"
          />
          <div style={{display:"flex",justifyContent:"center"}}>
          <button className="submit-button" variant="dark" type="submit">
        Submit
      </button>
      </div>

          
          
        </form> 
  );
};