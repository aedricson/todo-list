import React from 'react';
import './App.css';
import { Navbar, Container, Button, Form, Row, Col, Table } from 'react-bootstrap';

export const App: React.FC = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
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

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
