import { Component } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Hamburguesas extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Hamburguesas</h1>
          <Card>
            <h2>Trompo</h2>
            <IoMdAdd />
          </Card>
          <Card>
            <h2>Regular</h2>
            <IoMdAdd />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Hamburguesas;
