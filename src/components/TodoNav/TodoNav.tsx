import React, { useState } from 'react';
import { Navbar, Container, Button, Form, Row, Col } from 'react-bootstrap';

import './TodoNav.css';
import { TodoAddModal } from "../TodoAddModal";

export const TodoNav: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  }

  const handleCloseModal = () => {
    setShow(false);
  }

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
              <Button variant="light" onClick={() => handleOpenModal()}>
                Add Todo
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <TodoAddModal
        show={show}
        onClose={handleCloseModal}
        todo={null}
      />
    </Navbar>
  );
}