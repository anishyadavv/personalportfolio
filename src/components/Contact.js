import React, {useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Spinner } from "react-bootstrap";

const Contact = () => {
  const [spinnerstate, setSpinnerState] = useState(false); 
  const [messagesent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emptyinputs =()=>{
    setEmail("");
    setName("");
    setMessage("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinnerState(true);
    try {
      const data = { name, email, message };
      const response = await fetch(
        "https://portfoliobackend-477y.onrender.com/contact",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );
      const result = await response.json();
      if(result.success){
        emptyinputs();
        setSpinnerState(false);
        setMessageSent(true);
      }
      else{
        alert("Message Not Sent");
        setSpinnerState(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
    { spinnerstate &&<Spinner style={{position:'fixed',top:"50%",left:"50%"}}/>}
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
          <Form onSubmit={handleSubmit}>
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
                id="name"
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
                id="email"
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
                onChange={(e) => setMessage(e.target.value)}
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
            {messagesent && <p className="mt-2 text-success">Your message is sent Successfully</p>}
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Contact;
