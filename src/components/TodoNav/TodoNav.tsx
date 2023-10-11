import React, { useState } from 'react';
import { Navbar, Container, Button, Form, Row, Col, Dropdown } from 'react-bootstrap';

import './TodoNav.css';
import { TodoAddModal } from "../TodoAddModal";
import { SortBy } from '../../types/SortBy';

type Props = {
  query: string,
  onSearch: (v: string) => void,
  onSort: (v: SortBy) => void,
}

export const TodoNav: React.FC<Props> = ({
  query,
  onSearch,
  onSort
}) => {
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
                value={query}
                onChange={(event) => onSearch(event.target.value)}
              />
            </Col>

            <Col xs="auto">
              <Dropdown onSelect={(event) => onSort(event as SortBy)}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey={SortBy.ALL}>All</Dropdown.Item>
                  <Dropdown.Item eventKey={SortBy.ACTIVE}>Active</Dropdown.Item>
                  <Dropdown.Item eventKey={SortBy.COMPLETED}>Completed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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