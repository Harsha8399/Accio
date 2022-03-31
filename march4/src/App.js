import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import TableComponent from './Components/TableComponent'
import { Container, Button } from 'react-bootstrap'

function App() {
  return (
    <Container className="App">
      <TableComponent/>
      <Button variant='dark'>Show/Hide</Button>
    </Container>
  );
}

export default App;
