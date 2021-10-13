import { Component } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Papas extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Papas Asadas</h1>
          <Card>
            <h2>Trompo</h2>
            <IoMdAdd />
          </Card>
          <Card>
            <h2>Bistec</h2>
            <IoMdAdd />
          </Card>

          <Card>
            <h2>Mixta</h2>
            <IoMdAdd />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Papas;
