import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [spinnerstate, setSpinnerState] = useState(false);
  const [messagesent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emptyinputs = () => {
    setEmail("");
    setName("");
    setMessage("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    setSpinnerState(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          // show the user a success message
          emptyinputs();
          setSpinnerState(false);
          setMessageSent(true);
        },
        (error) => {
          // show the user an error
          alert("Message Not Sent");
          setSpinnerState(false);
        }
      );
  };
  return (
    <>
      {spinnerstate && (
        <Spinner style={{ position: "fixed", top: "50%", left: "50%" }} />
      )}
      <div className="contact">
        <div id="contact" className="contact-section pt-5 me-4 ms-4">
          <div className="contact-main  text-center m-auto">
            <h2
              className="text-center project-heading"
              style={{ fontWeight: "700" }}
            >
              CONTACT
            </h2>
            <div className="underline"></div>
            <p className="mt-5" style={{ fontSize: "1.2rem", color: "#666" }}>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
        </div>
        <Container className="contact-form shadow-lg">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{
                  padding: "15px",
                  backgroundColor: "#ebebeb",
                  fontWeight: "600",
                }}
                type="text"
                placeholder="Enter Your Name"
                name="user_name"
                id="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{
                  padding: "15px",
                  backgroundColor: "#ebebeb",
                  fontWeight: "600",
                }}
                type="email"
                placeholder="Enter Your Email"
                id="user_email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Your Message"
                style={{
                  height: "250px",
                  backgroundColor: "#ebebeb",
                  fontWeight: "600",
                }}
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </Form.Group>

            <Button
              style={{ float: "right", marginTop: "5vh" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            {messagesent && (
              <p className="mt-2 text-success">
                Your message is sent Successfully
              </p>
            )}
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Contact;
