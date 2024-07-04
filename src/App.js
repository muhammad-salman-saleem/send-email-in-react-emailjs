import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import emailjs from "@emailjs/browser"


const App = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  

  // const sendEmail = event => {
  //   event.preventDefault();
  //   emailjs.send("service_4nqrl0p", "template_pb4efoj", {
  //     from_name: state.name,
  //     from_email: state.email,
  //     subject: state.subject,
  //     message: state.message,
  //   }, "DcD9S1GsJjTW6BPma")
  //   .then((result) => {
  //     alert("Email successfully sent!");
  //   }, (error) => {
  //     alert("Failed to send email, please try again later.");
  //   });
  // };

  const sendEmail = event => {
    event.preventDefault();
    window.Email.send({
      SecureToken : "81667ccd-8d03-420b-9e3b-8a503158387a",
      To : 'iamtestuser404@gmail.com',
      From : state.email,
      Subject : state.subject,
      Body : state.message
  })
    .then((result) => {
      alert("Email successfully sent!");
    }, (error) => {
      alert("Failed to send email, please try again later.");
    });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  ﻿/* SmtpJS.com - v3.0.0 */
  return (
    <div style={{width:"50%",alignSelf:"center",margin:"auto" ,paddingTop:"50px"}}>
    <form onSubmit={sendEmail}>
      <Form.Group controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter your full name"
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={state.email}
          placeholder="Enter your email"
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={state.subject}
          placeholder="Enter subject"
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={state.message}
          rows="3"
          placeholder="Enter your message"
          onChange={onInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  </div>
  )
}

export default App
