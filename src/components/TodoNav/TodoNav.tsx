import React from "react";
import { Navbar, Container, Button, Form, Row, Col } from 'react-bootstrap';

import './TodoNav.css';

export const TodoNav: React.FC = () => {
  return (
    <Navbar className="todoNav bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Todo list</Navbar.Brand>

        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>

            <Col xs="auto">
              <Button variant="light">Add Todo</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}