import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
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
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>
      </div>
      <Container className="contact-form shadow-lg">
        <Form>
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
            />
          </Form.Group>

          <Button
            style={{ float: "right", marginTop: "5vh" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
