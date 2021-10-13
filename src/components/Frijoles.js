import { Component } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Frijoles extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Frijoles Charros</h1>
          <Card>
            <h2>Regulares</h2>
            <IoMdAdd />
          </Card>
          <Card>
            <h2>Con Queso</h2>
            <IoMdAdd />
          </Card>

          <Card>
            <h2>Queso y Trompo</h2>
            <IoMdAdd />
          </Card>
          <Card>
            <h2>Queso y Bistec</h2>
            <IoMdAdd />
          </Card>
          <Card>
            <h2>Queso, Bistec, y Trompo</h2>
            <IoMdAdd />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Frijoles;
