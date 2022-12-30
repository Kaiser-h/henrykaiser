import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

function Contact(props) {
  return (
    <div id="contact" className="contact">
      <Container>
        <Row>
          <Col>About</Col>
          <Col>
            <Form action="mailto:agbikaiser@gmail.com" method="post">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" name="message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
