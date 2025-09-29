import { Container, Row, Col } from "react-bootstrap";

import TodoList from "./components/TodoList";

import './assets/app.css';

export default function App() {
  return (
    <Container className='mt-5'>
        <Row>
          <Col>
            <TodoList />
          </Col>
        </Row>
    </Container>
  );
};