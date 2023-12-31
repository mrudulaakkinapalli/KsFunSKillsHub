import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from "react-bootstrap/Form";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'; 

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ContactUs = () => {
  const [isModified,setisModified]=useState(false);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  const [course,setCourse]=useState('');
  const [requiredSlot,setRequiredSlot]=useState('');
  const [open,setOpen]=useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    if(isModified){
      setOpen(true)
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setRequiredSlot('');
      setCourse('');
    }
    setisModified(false)
    e.preventDefault();
    emailjs.sendForm('service_cme4cjs', 'template_pws06tp', form.current, 'Bmzub1enlrKBnAh-r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <>
    {open?<Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully Submitted
        </Alert>
      </Snackbar>:""}
    <form ref={form} onSubmit={sendEmail}> 
            <div
              className="mb-2 form-item"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Form.Control
                style={{ marginRight: "10px" }}
                type="firstName"
                name="first_name"
                placeholder="First Name"
                value={firstName}
                onChange={(e)=>{setFirstName(e.target.value);setisModified(true)}}
              />
              <Form.Control type="lastName" name="last_name" value={lastName} placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value);setisModified(true)}} />
            </div>
            <Form.Control
              className="mb-2 form-item"
              type="email"
              name="from_email"
              value={email}
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}

            />
            <Form.Control
              className="mb-2 form-item"
              type="mobilenumber"
              name="mobile_number"
              value={mobile}
              placeholder="Enter mobile number"
              onChange={(e)=>{setMobile(e.target.value);setisModified(true)}}

            />
            <Form.Control
              className="mb-2 form-item"
              type="course"
              name="course"
              value={course}
              placeholder="Enter course name"
              onChange={(e)=>{setCourse(e.target.value);setisModified(true)}}

            />
            <Form.Control
            className="mb-2 form-item"
            type="slot"
            name="required_slot"
            value={requiredSlot}
            placeholder="Required slot (ex 1pm - 2pm)"
            onChange={(e)=>{setRequiredSlot(e.target.value);setisModified(true)}}

          />
          <div style={{display:"flex",justifyContent:"center"}}>
          <button type="submit" class="submit-button" disabled={ !(firstName!=="" && lastName !=="" && email!=="" && requiredSlot!=="" && course!=="" && mobile!=="")}  variant="dark"  >
        Submit
      </button>
      </div>          
        </form> 
    </>
     
  );
};
